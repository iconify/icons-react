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

.qqeub_faf {
  d: path("M2.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.t-xp55ywv {
  d: path("M10 18h11l-1.25 1.75L21 21.5h-9m-5-11a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="qqeub_faf"/><path class="t-xp55ywv"/></g>`,
		"fallback": "uix:duct-tape",
	});
}

export default Component;
