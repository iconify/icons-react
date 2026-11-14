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
		"content": `<style>.hqx77ybkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7v8.5c0 3.5 2.5 6 6 6c2.5 0 4-1 5.25-3L19 13.75M8 11V4m3 7V3m3 13.5v-11");
}
</style><path class="hqx77ybkv"/>`,
		"fallback": "uix-sharp:canvas-pan",
	});
}

export default Component;
