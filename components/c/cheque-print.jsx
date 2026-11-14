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
		"content": `<style>.pag5k6upz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v8h-19Zm4 0v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3m-12 8v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6m-10 3.25h4M18 10.5h.01");
}
</style><path class="pag5k6upz"/>`,
		"fallback": "uix-sharp:cheque-print",
	});
}

export default Component;
