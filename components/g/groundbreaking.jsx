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

.qibh9z4mj {
  d: path("M9.25 2.5h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 7.75 4a1.5 1.5 0 0 1 1.5-1.5m.5 3v5M7 10.5h5.5v5l-2.75 1.75L7 15.5Z");
}

.yw2pcvbtf {
  d: path("M3 20.5q6.75-6.5 13.5 0m-14 0h19M18.619 4.006l.431.702a1.5 1.5 0 0 0 .492.492l.702.431a.726.726 0 0 1 0 1.238l-.702.431a1.5 1.5 0 0 0-.492.492l-.431.702a.726.726 0 0 1-1.238 0l-.431-.702a1.5 1.5 0 0 0-.492-.492l-.702-.431a.726.726 0 0 1 0-1.238l.702-.431a1.5 1.5 0 0 0 .492-.492l.431-.702a.726.726 0 0 1 1.238 0");
}
</style><g class="hntgybcog"><path class="qibh9z4mj"/><path class="yw2pcvbtf"/></g>`,
		"fallback": "uix:groundbreaking",
	});
}

export default Component;
