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
		"content": `<style>.j60suybzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19M3 15.5v-6l1-2V4h2v3.5l1 2v6m3 0v-6l1-2V4h2v3.5l1 2v6m3 0v-6l1-2V4h2v3.5l1 2v6M4.25 19.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m12 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="j60suybzi"/>`,
		"fallback": "uix-sharp:bottles-on-conveyor",
	});
}

export default Component;
