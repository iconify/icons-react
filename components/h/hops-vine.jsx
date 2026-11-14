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
		"content": `<style>.kgs7h_ili {
  d: path("M6.5 3.25Q4.5 7 7 10q2.5-3.5-.5-6.75Z");
}

.r7rufobdv {
  d: path("m10.75 12l3.75 2.5l3.75-2.5m-7 3.5L14.5 18l3.25-2.5M5 3q6.5 0 9.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlkyg_bys {
  d: path("M14.5 7.5c5 0 5 7.5 0 14c-5-6.5-5-14 0-14Z");
}
</style><g class="ulnmmdpxh"><path class="xlkyg_bys"/><path class="r7rufobdv"/><path class="kgs7h_ili"/></g>`,
		"fallback": "uix-sharp:hops-vine",
	});
}

export default Component;
