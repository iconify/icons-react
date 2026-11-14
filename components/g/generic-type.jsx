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
		"content": `<style>.bg0yvdb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l-5 6.5l5 6.5m9-13l5 6.5l-5 6.5m-7-11h5m-2.5 0V17");
}
</style><path class="bg0yvdb7k"/>`,
		"fallback": "uix-sharp:generic-type",
	});
}

export default Component;
