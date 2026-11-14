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
		"content": `<style>.j2r6v3u5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V10L9 13v-3l5.5 3V6h6v14.5ZM7 17h1m4 0h1m3 0h1");
}
</style><path class="j2r6v3u5g"/>`,
		"fallback": "uix-sharp:industrial-unit",
	});
}

export default Component;
