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
		"content": `<style>.rcpa-wmvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.125 12za1.625 1.625 0 0 1 1.625 1.625v5.25A1.625 1.625 0 0 1 4.125 20.5A1.625 1.625 0 0 1 2.5 18.875v-5.25A1.625 1.625 0 0 1 4.125 12m6-6za1.625 1.625 0 0 1 1.625 1.625v11.25a1.625 1.625 0 0 1-1.625 1.625A1.625 1.625 0 0 1 8.5 18.875V7.625A1.625 1.625 0 0 1 10.125 6m6 3.5za1.625 1.625 0 0 1 1.625 1.625v7.75a1.625 1.625 0 0 1-1.625 1.625a1.625 1.625 0 0 1-1.625-1.625v-7.75A1.625 1.625 0 0 1 16.125 9.5M2 20.5h20m-1.25-12v12m0-14c-1.25-1.5-.5-3 .25-4");
}
</style><path class="rcpa-wmvz"/>`,
		"fallback": "uix:gas-processing-plant",
	});
}

export default Component;
