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
		"content": `<style>.q6iywdtjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.25h19v11.5h-19Zm0 3h19M6.5 12v3m3.75-3v3M14 12v3m3.75-3v3");
}
</style><path class="q6iywdtjt"/>`,
		"fallback": "uix-sharp:genre-blues",
	});
}

export default Component;
