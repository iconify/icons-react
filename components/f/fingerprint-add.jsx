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
		"content": `<style>.pjbn3_b9m {
  d: path("M3 15v-4a7 7 0 0 1 14 0v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5b5rac3h {
  d: path("M6.5 18.5V11a3.5 3.5 0 0 1 7 0v1.25M10 20.5V11m8 4v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="pjbn3_b9m"/><path class="z5b5rac3h"/></g>`,
		"fallback": "uix-sharp:fingerprint-add",
	});
}

export default Component;
