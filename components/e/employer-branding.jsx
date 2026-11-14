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

.ig6wp9bvj {
  d: path("M2.5 3h19M8 7h8a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 16 19H8a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 8 7M7 3v4m10-4v4");
}

.v8kq0q3kk {
  d: path("m12.441 10.768l.088.205a1.5 1.5 0 0 0 1.235.897l.222.021a.48.48 0 0 1 .273.839l-.167.147a1.5 1.5 0 0 0-.472 1.452l.048.217a.48.48 0 0 1-.713.519l-.192-.114a1.5 1.5 0 0 0-1.526 0l-.192.114a.48.48 0 0 1-.713-.519l.048-.217a1.5 1.5 0 0 0-.472-1.452l-.167-.147a.48.48 0 0 1 .273-.839l.222-.021a1.5 1.5 0 0 0 1.235-.897l.088-.205a.48.48 0 0 1 .882 0");
}
</style><g class="hntgybcog"><path class="ig6wp9bvj"/><path class="v8kq0q3kk"/></g>`,
		"fallback": "uix:employer-branding",
	});
}

export default Component;
