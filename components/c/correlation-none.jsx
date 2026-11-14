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
		"content": `<style>.s2v0oyb7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17M7 16h.01M10 7.5h.01M12.5 13h.01M15 8.5h.01m2.99 7h.01");
}
</style><path class="s2v0oyb7r"/>`,
		"fallback": "uix:correlation-none",
	});
}

export default Component;
