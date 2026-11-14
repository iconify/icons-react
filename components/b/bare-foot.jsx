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

.mpduvac-a {
  d: path("M11.25 2.5V10c0 2 1 3.5 2.75 4.5m0 0q1.5-.75 2.5.75q1.5-.5 2.5 1.25q1.75.5 2 2.25");
}

.yqvuyloei {
  d: path("M7 2.5v10c-2 1-3.5 3-3.5 5.5c0 1.75 1.25 3 3 3h12.75c1.25 0 2-1 1.75-2.25");
}
</style><g class="hntgybcog"><path class="yqvuyloei"/><path class="mpduvac-a"/></g>`,
		"fallback": "uix:bare-foot",
	});
}

export default Component;
