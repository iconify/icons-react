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
		"content": `<style>.gurg9_4oi {
  fill: currentColor;
  d: path("M2.5 2.5h8v8h-8Z");
}

.hznq92a2q {
  d: path("M13.5 13.5h8v8h-8Zm.5-9h2.5a3 3 0 0 1 3 3v3m-2-2l2 2l2-2M10 19.5H7.5a3 3 0 0 1-3-3v-3m-2 2l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gurg9_4oi"/><path class="hznq92a2q"/></g>`,
		"fallback": "uix-sharp:colour-replace",
	});
}

export default Component;
