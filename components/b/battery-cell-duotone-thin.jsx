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
		"content": `<style>.cwc9nyz4r {
  fill: currentColor;
  d: path("M7 6h10v14H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8_5durmd {
  d: path("M7 6h10v14H7Z");
}

.qvytntb8g {
  d: path("M7 10h10");
}

.u-a-7fbnu {
  d: path("M10 6V3h4v3");
}
</style><g class="hntgybcog"><path class="cwc9nyz4r"/><path class="k8_5durmd"/><path class="qvytntb8g"/><path class="u-a-7fbnu"/></g>`,
		"fallback": "iconmind:battery-cell-duotone-thin",
	});
}

export default Component;
