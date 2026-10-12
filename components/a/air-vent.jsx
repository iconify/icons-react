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

.mzdha_obf {
  d: path("M7 7h10M7 10h10m-9.25 7.25q-1 1 0 2t0 2m4.25-4q-1 1 0 2t0 2m4.25-4q-1 1 0 2t0 2");
}

.virtrhrph {
  width: 17.5px;
  height: 11.5px;
  x: 3.25px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="virtrhrph"/><path class="mzdha_obf"/></g>`,
		"fallback": "iconoven:air-vent",
	});
}

export default Component;
