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

.iwmyaxv-z {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3");
}

.zf5ixr14l {
  d: path("M6 5.75L8 7.5L6 9.25m4.75-1.75H18m-12 5h9.5M6 17h6");
}
</style><g class="hntgybcog"><path class="iwmyaxv-z"/><path class="zf5ixr14l"/></g>`,
		"fallback": "uix:console-log",
	});
}

export default Component;
