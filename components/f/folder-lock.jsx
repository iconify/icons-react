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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.wcy3ncb9r {
  d: path("M11.25 13h1.5a1.75 1.75 0 0 1 1.75 1.75V15a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 9.5 15v-.25A1.75 1.75 0 0 1 11.25 13m-.75 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="hntgybcog"><path class="q3wixnhae"/><path class="wcy3ncb9r"/></g>`,
		"fallback": "uix:folder-lock",
	});
}

export default Component;
