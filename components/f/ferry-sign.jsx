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

.xb_buiast {
  d: path("M6.25 11.5h11.5l-1.75 3H8Zm2.75 0V9h5.75v2.5M12.5 9V6.75M6 18.25c1 0 1.5-.75 2.5-.75s1.5.75 2.5.75s1.5-.75 2.5-.75s1.5.75 2.5.75s1-.5 2-.75");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="xb_buiast"/></g>`,
		"fallback": "iconoven:ferry-sign",
	});
}

export default Component;
