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
		"content": `<style>.c5m06pb_n {
  d: path("M15.25 11.75L18 11.5l-.5-2.75");
}

.ed_m5qbpk {
  d: path("M5.5 16c2-6.5 8-8 12.5-4.5");
}

.lwq9sh_vn {
  d: path("m2.5 5l6-2l7 2l6-2v16l-6 2l-7-2l-6 2Zm6-2v4.5m7-2.5v3m-7 9v2m7-.5V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lwq9sh_vn"/><path class="ed_m5qbpk"/><path class="c5m06pb_n"/></g>`,
		"fallback": "uix-sharp:chart-flow-map",
	});
}

export default Component;
