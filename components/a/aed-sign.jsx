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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sb7m5f9qz {
  d: path("M12 19s-6.75-3.75-6.75-8.25A3.4 3.4 0 0 1 12 8.85a3.4 3.4 0 0 1 6.75 1.9C18.75 15.25 12 19 12 19");
}

.wbr-aqbwt {
  d: path("m12.75 11.25l-2 2.75h2.5l-2 2.75");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="sb7m5f9qz"/><path class="wbr-aqbwt"/></g>`,
		"fallback": "iconoven:aed-sign",
	});
}

export default Component;
