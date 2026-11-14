import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dwt1sgb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8.5v3.75a5 5 0 1 0 5 0V8.5m-2.5-6V7m-1.5-4.5h3M12 14h.01");
}
</style><path class="dwt1sgb8b"/>`,
		"fallback": "uix:biohacking",
	});
}

export default Component;
