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
		"content": `<style>.coxm4z73m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6L5 3.5L7.5 6v4h-5V6m7 0L12 3.5L14.5 6v4h-5V6m7 0L19 3.5L21.5 6v4h-5V6m-14 11L5 14.5L7.5 17v4h-5v-4m7 0l2.5-2.5l2.5 2.5v4h-5v-4m7 0l2.5-2.5l2.5 2.5v4h-5v-4");
}
</style><path class="coxm4z73m"/>`,
		"fallback": "uix-sharp:housing-estate",
	});
}

export default Component;
