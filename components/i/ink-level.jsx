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
		"content": `<style>.objucxb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.75a9.5 9.5 0 0 1 19 0m-9.5 0l3.75-5M12 15.5s-2.5 1.5-2.5 3a2.5 2.5 0 0 0 5 0c0-1.5-2.5-3-2.5-3Z");
}
</style><path class="objucxb4d"/>`,
		"fallback": "uix-sharp:ink-level",
	});
}

export default Component;
