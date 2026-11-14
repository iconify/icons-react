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
		"content": `<style>.b7d3ld8ro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25A2.5 2.5 0 1 1 13.25 10A2.5 2.5 0 1 1 10 12.5A2.5 2.5 0 1 1 6.75 10A2.5 2.5 0 1 1 8 6.25a2.5 2.5 0 1 1 4 0m-2 6.25v9M10 9h.01m4.74 9l2 2L21 15.75");
}
</style><path class="b7d3ld8ro"/>`,
		"fallback": "uix:flower-check",
	});
}

export default Component;
