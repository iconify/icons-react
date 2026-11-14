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
		"content": `<style>.a3j-vcbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 20.5H2.5v-18h17v10.1m-17-1.1h17M6 5.5v6m2.75-6v6m3-5.5l2.75 5.5m1 4l5 5m0-5l-5 5");
}
</style><path class="a3j-vcbzz"/>`,
		"fallback": "uix-sharp:bookshelf-x",
	});
}

export default Component;
