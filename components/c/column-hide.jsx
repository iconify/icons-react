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
		"content": `<style>.dt4mdsbzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3h.25A2.625 2.625 0 0 1 8 5.625v12.75A2.625 2.625 0 0 1 5.375 21h-.25A2.625 2.625 0 0 1 2.5 18.375V5.625A2.625 2.625 0 0 1 5.125 3m13.5 0h.25A2.625 2.625 0 0 1 21.5 5.625v12.75A2.625 2.625 0 0 1 18.875 21h-.25A2.625 2.625 0 0 1 16 18.375V5.625A2.625 2.625 0 0 1 18.625 3M10.75 3v18m2.5-18v18");
}
</style><path class="dt4mdsbzc"/>`,
		"fallback": "uix:column-hide",
	});
}

export default Component;
