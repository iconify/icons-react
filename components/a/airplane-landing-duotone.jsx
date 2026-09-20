import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.enbymcb_y {
  d: path("M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-26.16-24.3L53.21 142.24A40.12 40.12 0 0 1 24 103.72V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 5 4.87l10.6 29.37L96 77.39V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 4.85 4.5l22.5 53.63l60.84 17A40.13 40.13 0 0 1 240 148.32V184a8 8 0 0 1-10.16 7.7M224 148.32a24.09 24.09 0 0 0-17.58-23.13l-64.57-18a8 8 0 0 1-5.23-4.61L114 48.67l-2-.67v40a8 8 0 0 1-10.19 7.7l-44-12.54a8 8 0 0 1-5.33-5L41.79 48.59L40 48v55.72a24.09 24.09 0 0 0 17.53 23.12L224 173.45Z");
}

.q1ajrz1wz {
  d: path("M232 148.32V184L55.37 134.54A32 32 0 0 1 32 103.73V48a8 8 0 0 1 10.53-7.59L48 42.24l12 33.22L104 88V48a8 8 0 0 1 10.53-7.59l5.47 1.83l24 57.2l64.56 18A32 32 0 0 1 232 148.32");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="q1ajrz1wz"/><path class="enbymcb_y"/></g>`,
		"fallback": "ph:airplane-landing-duotone",
	});
}

export default Component;
