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

.izm8epb2z {
  d: path("m12.5 13l2 2l2-2");
}

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.swwxl7pak {
  d: path("M9.5 15.5V11a2.5 2.5 0 0 1 5 0v4");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="swwxl7pak"/><path class="izm8epb2z"/></g>`,
		"fallback": "uix:directions-u-turn",
	});
}

export default Component;
