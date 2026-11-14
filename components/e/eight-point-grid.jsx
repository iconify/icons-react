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
		"content": `<style>.vll18bb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-15 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m15 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-15 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="vll18bb1f"/>`,
		"fallback": "uix:eight-point-grid",
	});
}

export default Component;
