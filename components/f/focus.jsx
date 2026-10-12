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

.jnfqsebce {
  width: 6.5px;
  height: 6.5px;
  x: 8.75px;
  y: 8.75px;
  rx: 1.25px;
}

.td45_wziz {
  d: path("M2.75 7.75v-2.5a2.5 2.5 0 0 1 2.5-2.5h2.5m8.5 0h2.5a2.5 2.5 0 0 1 2.5 2.5v2.5m0 8.5v2.5a2.5 2.5 0 0 1-2.5 2.5h-2.5m-8.5 0h-2.5a2.5 2.5 0 0 1-2.5-2.5v-2.5");
}
</style><g class="hntgybcog"><path class="td45_wziz"/><rect class="jnfqsebce"/></g>`,
		"fallback": "iconoven:focus",
	});
}

export default Component;
