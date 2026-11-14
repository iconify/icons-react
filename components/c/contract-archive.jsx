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
		"content": `<style>.wdjbmobel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 12V2.5H14l2.75 2.75V12M3 12h18M4.5 12v7.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V12m-9.25-6h3m-3 3h3.5M10 16.5h4");
}
</style><path class="wdjbmobel"/>`,
		"fallback": "uix-sharp:contract-archive",
	});
}

export default Component;
