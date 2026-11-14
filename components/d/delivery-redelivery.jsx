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
		"content": `<style>.k1c91c4lo {
  d: path("m16.25 12.5l1.5 1.5l-1.5 1.5");
}

.q3lri6jjw {
  d: path("M11.191 18.093L10 18.75l-7.25-4v-8.5l7.25-4l7.25 4v3.32");
}

.s3qjqub9e {
  d: path("M2.75 6.25L10 10.5l7.25-4.25M10 10.5v8.25m11.5-1A3.75 3.75 0 1 1 17.75 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q3lri6jjw"/><path class="s3qjqub9e"/><path class="k1c91c4lo"/></g>`,
		"fallback": "uix-sharp:delivery-redelivery",
	});
}

export default Component;
