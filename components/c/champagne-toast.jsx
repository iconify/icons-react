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
		"content": `<style>.exectlpzf {
  d: path("m9.683 6.787l1.15.287a1.5 1.5 0 0 1 1.049 1.961l-1.525 4.258a1.5 1.5 0 0 1-1.775.949l-.277-.069a1.5 1.5 0 0 1-1.121-1.671l.652-4.475a1.5 1.5 0 0 1 1.847-1.24M4.324 20.395l4.852 1.21L6.75 21l1.693-6.792");
}

.ezd8hsetq {
  d: path("m13.167 7.074l1.15-.287a1.5 1.5 0 0 1 1.847 1.24l.652 4.475a1.5 1.5 0 0 1-1.121 1.671l-.277.069a1.5 1.5 0 0 1-1.775-.949l-1.525-4.258a1.5 1.5 0 0 1 1.049-1.961m1.657 14.531l4.852-1.21L17.25 21l-1.693-6.792M10 2.75h.01M14 2.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="exectlpzf"/><path class="ezd8hsetq"/></g>`,
		"fallback": "uix:champagne-toast",
	});
}

export default Component;
