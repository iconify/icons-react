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

.le-3_jblq {
  d: path("M13 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wtfq6b2ta {
  d: path("M14 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.x4bmljlar {
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.y1b-jubui {
  d: path("M5 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="y1b-jubui"/><path class="le-3_jblq"/><path class="x4bmljlar"/><path class="wtfq6b2ta"/></g>`,
		"fallback": "iconmind:hob-outline-thin",
	});
}

export default Component;
