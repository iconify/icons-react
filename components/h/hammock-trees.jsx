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
		"content": `<style>.jr9q4abso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 3.5v12M15 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 3.5v12M5.5 11l3 3.5q3.5 6.5 7 0l3-3.5m-10 3.5h7");
}
</style><path class="jr9q4abso"/>`,
		"fallback": "uix-sharp:hammock-trees",
	});
}

export default Component;
