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
		"content": `<style>.afsg1sbzr {
  d: path("M11.48 7.2L9.52 6.05q-.52-.3-.52.3v2.3q0 .6.52.3l1.96-1.15q.52-.3 0-.6m1.04 0l1.96-1.15q.52-.3.52.3v2.3q0 .6-.52.3L12.52 7.8q-.52-.3 0-.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywris_xwn {
  d: path("M3.5 17a8.5 8.5 0 0 1 17 0a1.25 1.25 0 0 1-2.5 0a6 6 0 0 0-12 0a1.25 1.25 0 0 1-2.5 0");
}
</style><g class="hntgybcog"><path class="ywris_xwn"/><path class="afsg1sbzr"/></g>`,
		"fallback": "iconoven:headband",
	});
}

export default Component;
