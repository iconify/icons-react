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
		"content": `<style>.ufr9-zzcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v7h-19Zm0 7h19v4h-19Zm2 4v6m15-6v6M8 18h8m-4 0v3");
}
</style><path class="ufr9-zzcx"/>`,
		"fallback": "uix-sharp:banquette",
	});
}

export default Component;
