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
		"content": `<style>.xytd17brg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18.5v-13a2 2 0 0 1 2-2h11.5a2 2 0 0 1 2 2v13A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5V10H6m3.5-2.5H18m-8 10v-3m3 3v-5m3 5V11");
}
</style><path class="xytd17brg"/>`,
		"fallback": "uix-sharp:business-news",
	});
}

export default Component;
