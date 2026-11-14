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
		"content": `<style>.cunsi4b_b {
  d: path("M5.25 12a1 2.5 0 1 0 2 0a1 2.5 0 1 0-2 0");
}

.diytm2bif {
  d: path("M2.5 12a3.75 6.5 0 1 0 7.5 0a3.75 6.5 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.js3wqv9uz {
  d: path("M6.25 5.5H18a3.5 6.5 0 0 1 0 13H6.25");
}
</style><g class="hntgybcog"><path class="js3wqv9uz"/><path class="diytm2bif"/><path class="cunsi4b_b"/></g>`,
		"fallback": "uix:foam-roller",
	});
}

export default Component;
