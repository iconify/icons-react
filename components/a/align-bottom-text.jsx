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
		"content": `<style>.ymfjuacly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5h19v2h-19Zm1-3.5h14m-14-4.75h10M3.5 4.5h6");
}
</style><path class="ymfjuacly"/>`,
		"fallback": "uix-sharp:align-bottom-text",
	});
}

export default Component;
