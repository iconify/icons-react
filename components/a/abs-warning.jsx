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
		"content": `<style>.ca46qmn1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m11.864 6.364a9 9 0 0 1-12.728 0m0-12.728a9 9 0 0 1 12.728 0M12 9.25v3.25m0 2.5h.01");
}
</style><path class="ca46qmn1b"/>`,
		"fallback": "uix:abs-warning",
	});
}

export default Component;
