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

.kvk85nbvi {
  d: path("M6.25 17.5h4V8.75h7m-2.5-2.5l2.5 2.5l-2.5 2.5M14 17.5h3.5");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="kvk85nbvi"/></g>`,
		"fallback": "iconoven:detour-sign",
	});
}

export default Component;
