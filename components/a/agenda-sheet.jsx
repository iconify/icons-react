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
		"content": `<style>.dit9v-b6f {
  d: path("M8.5 2.75v2.5m3.5-2.5v2.5m3.5-2.5v2.5M8.25 10h7.5m-7.5 3.5h7.5M8.25 17h4.5");
}

.eht8p590i {
  width: 14.5px;
  height: 17.5px;
  x: 4.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="eht8p590i"/><path class="dit9v-b6f"/></g>`,
		"fallback": "iconoven:agenda-sheet",
	});
}

export default Component;
