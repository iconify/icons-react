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
		"content": `<style>.oq1bbzbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21v-9a7.5 7.5 0 0 1 15 0v9m-17-2.5h19M8 5.75V18.5m4-16v16m4-12.75V18.5");
}
</style><path class="oq1bbzbji"/>`,
		"fallback": "uix-sharp:animal-cage",
	});
}

export default Component;
