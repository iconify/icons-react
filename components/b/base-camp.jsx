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

.n50xzfbrc {
  d: path("m3 20.5l5-11l5 11");
}

.spg5s-bma {
  d: path("M11.25 16.75L15.5 4.5l5.5 16m-18.5 0h19M6 20.5l2-4l2 4");
}
</style><g class="hntgybcog"><path class="n50xzfbrc"/><path class="spg5s-bma"/></g>`,
		"fallback": "uix:base-camp",
	});
}

export default Component;
