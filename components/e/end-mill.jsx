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
		"content": `<style>.z46sk6brq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v8h-5Zm0 8V19l2.5 2.5l2.5-2.5v-8.5m-5 3.5l5-2m-5 5.5l5-2");
}
</style><path class="z46sk6brq"/>`,
		"fallback": "uix-sharp:end-mill",
	});
}

export default Component;
