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
		"content": `<style>.bwtsolstw {
  d: path("M4 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0m7-11.5V7m-7 7h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhhj4baga {
  d: path("M8 14a3 7 0 1 0 6 0a3 7 0 1 0-6 0M19.5 3.5v4m-2-2h4");
}
</style><g class="hntgybcog"><path class="bwtsolstw"/><path class="zhhj4baga"/></g>`,
		"fallback": "uix:dance-music",
	});
}

export default Component;
