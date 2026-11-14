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
		"content": `<style>.degntu5_g {
  d: path("M14.692 18.602A9.2 9.2 0 0 1 12 19c-4 0-7.5-2.5-9.5-7c.584-1.314 1.296-2.457 2.11-3.418m4.741-3.197A9.2 9.2 0 0 1 12 5c4 0 7.5 2.5 9.5 7c-.593 1.334-1.317 2.492-2.147 3.461");
}

.egmrw-b6q {
  d: path("M12.493 8.535q.14.02.278.051t.273.073t.266.095t.257.116t.247.136t.236.156t.222.175t.207.192t.191.207t.174.223t.155.236t.136.247t.115.258t.094.266t.073.273t.05.278m-3.96 3.948q-.14-.02-.278-.051t-.273-.073t-.266-.095t-.257-.116t-.247-.136t-.236-.156t-.222-.175t-.207-.192t-.191-.207t-.174-.223t-.155-.236t-.136-.247t-.115-.258t-.094-.266t-.073-.273t-.05-.278M3.5 3.5l17 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="degntu5_g"/><path class="egmrw-b6q"/></g>`,
		"fallback": "uix:eye-off",
	});
}

export default Component;
