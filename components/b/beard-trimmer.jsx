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
		"content": `<style>.v1sasjb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5.5h11V9h-11ZM8 9v10a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 16 19V9M8.5 2.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="v1sasjb7d"/>`,
		"fallback": "uix-sharp:beard-trimmer",
	});
}

export default Component;
