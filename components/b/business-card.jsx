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

.kzqphpboj {
  d: path("M6.75 11.25h6m-6 3.75h10.5");
}

.xn3k12x2g {
  d: path("M5.25 3.75h13.5");
}

.ya_0mfz6j {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 6.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="xn3k12x2g"/><rect class="ya_0mfz6j"/><path class="kzqphpboj"/></g>`,
		"fallback": "iconoven:business-card",
	});
}

export default Component;
