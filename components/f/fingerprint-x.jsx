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
		"content": `<style>.enf_ol87r {
  d: path("M6.5 18.5V11a3.5 3.5 0 0 1 7 0v1.25M10 20.5V11m5.5 4.5l5 5m0-5l-5 5");
}

.pjbn3_b9m {
  d: path("M3 15v-4a7 7 0 0 1 14 0v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pjbn3_b9m"/><path class="enf_ol87r"/></g>`,
		"fallback": "uix-sharp:fingerprint-x",
	});
}

export default Component;
