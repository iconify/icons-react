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
		"content": `<style>.ah_ekt7rr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h19v12h-19Zm3 0v-7h6v7m3 0v-4h4v4m-9.5 6h6");
}
</style><path class="ah_ekt7rr"/>`,
		"fallback": "uix-sharp:card-catalogue",
	});
}

export default Component;
