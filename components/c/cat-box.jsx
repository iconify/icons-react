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
		"content": `<style>.ck5oge63g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 11.5h12.75A2.625 2.625 0 0 1 21 14.125v4.25A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375v-4.25A2.625 2.625 0 0 1 5.625 11.5m.875 0V3L10 5.75h4L17.5 3v8.5M10 8.75h.01m3.99 0h.01");
}
</style><path class="ck5oge63g"/>`,
		"fallback": "uix:cat-box",
	});
}

export default Component;
