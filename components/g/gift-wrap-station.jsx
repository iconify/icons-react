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
		"content": `<style>.by2zieiyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5c-1-3-3.5-4.5-3.75-2.75C8 6.25 10.5 7.5 12 7.5Zm0 0c1-3 3.5-4.5 3.75-2.75C16 6.25 13.5 7.5 12 7.5Zm-5.5 0h11v3h-11Zm1 3v5m9-5v5m-4.5-5v5m-9.5 0h19v3h-19Zm2.5 3v3m14-3v3");
}
</style><path class="by2zieiyz"/>`,
		"fallback": "uix-sharp:gift-wrap-station",
	});
}

export default Component;
