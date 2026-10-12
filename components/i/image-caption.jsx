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
		"content": `<style>.gwucx7bfe {
  d: path("m5.75 12.25l3.5-3.75l2.5 2.5l2-2l3.5 3.25M5.75 18.5h12.5M8.5 21.25h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvnog4ucf {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="mvnog4ucf"/><path class="gwucx7bfe"/></g>`,
		"fallback": "iconoven:image-caption",
	});
}

export default Component;
