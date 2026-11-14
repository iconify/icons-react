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
		"content": `<style>.ehzabs01i {
  d: path("M10.5 4a8 8 0 0 0 0 16Zm3 0a8 8 0 0 1 0 16Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z907b6bvk {
  d: path("M10.5 17a5 5 0 0 1 0-10m3 0a5 5 0 0 1 0 10");
}
</style><g class="hntgybcog"><path class="ehzabs01i"/><path class="z907b6bvk"/></g>`,
		"fallback": "uix:commission-split",
	});
}

export default Component;
