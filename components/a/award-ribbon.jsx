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
		"content": `<style>.b8fxafbsn {
  d: path("m12.441 6.768l.088.205a1.5 1.5 0 0 0 1.235.897l.222.021a.48.48 0 0 1 .273.839l-.167.147a1.5 1.5 0 0 0-.472 1.452l.048.217a.48.48 0 0 1-.713.519l-.192-.114a1.5 1.5 0 0 0-1.526 0l-.192.114a.48.48 0 0 1-.713-.519l.048-.217a1.5 1.5 0 0 0-.472-1.452l-.167-.147a.48.48 0 0 1 .273-.839l.222-.021a1.5 1.5 0 0 0 1.235-.897l.088-.205a.48.48 0 0 1 .882 0M8.5 13.75L7 21l5-2.5l5 2.5l-1.5-7.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="hntgybcog"><path class="yoftwf7ei"/><path class="b8fxafbsn"/></g>`,
		"fallback": "uix:award-ribbon",
	});
}

export default Component;
