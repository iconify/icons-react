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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn67o8bkj {
  d: path("m10 8.25l2-2l2 2m-4 7.5l2 2l2-2M8.25 10l-2 2l2 2m7.5-4l2 2l-2 2");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="zn67o8bkj"/></g>`,
		"fallback": "uix-sharp:dance-pad",
	});
}

export default Component;
