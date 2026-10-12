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
		"content": `<style>.g4zfw4b-y {
  d: path("M18.5 14v2a1.5 1.5 0 0 1-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lu74n5biu {
  width: 3.5px;
  height: 3.5px;
  x: 2.75px;
  y: 6px;
  rx: 0.5px;
}

.tjk5hccih {
  d: path("M9.5 21V6M6.25 6h15M8 6l1.5-3L11 6M6 21h7m5.5-15v8");
}
</style><g class="hntgybcog"><path class="tjk5hccih"/><rect class="lu74n5biu"/><path class="g4zfw4b-y"/></g>`,
		"fallback": "iconoven:crane-tower",
	});
}

export default Component;
