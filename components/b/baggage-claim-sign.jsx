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

.sn8nvnb0h {
  d: path("M7.5 9h9v6h-9Zm2.75 0V6h3.5v3M6 18h12");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="sn8nvnb0h"/></g>`,
		"fallback": "iconoven:baggage-claim-sign",
	});
}

export default Component;
