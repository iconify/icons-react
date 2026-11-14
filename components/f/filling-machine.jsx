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
		"content": `<style>.n4qi_-bve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.5v2L3 15.5V20a1.5 1.5 0 0 0 1.5 1.5h4A1.5 1.5 0 0 0 10 20v-4.5l-1.75-2v-2m7.5 0v2l-1.75 2V20a1.5 1.5 0 0 0 1.5 1.5h4A1.5 1.5 0 0 0 21 20v-4.5l-1.75-2v-2M3.5 2.5h6v1L8 5.5H5l-1.5-2Zm11 0h6v1l-1.5 2h-3l-1.5-2Zm-8 6h.01");
}
</style><path class="n4qi_-bve"/>`,
		"fallback": "uix-sharp:filling-machine",
	});
}

export default Component;
