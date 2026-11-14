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
		"content": `<style>.c31lf0mig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 14.4V16h-8V8h1.6m9.4 1.6V8h8v8h-1.6M2.5 10.5v-4m19 4v-4m-17-2L20 20");
}
</style><path class="c31lf0mig"/>`,
		"fallback": "uix-sharp:ar-glasses-off",
	});
}

export default Component;
