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
		"content": `<style>.e3dol68is {
  d: path("M15 11v3");
}

.f4yp5uw0u {
  d: path("M14 18.5a2 2 0 0 1 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k70w93buq {
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
}

.kjs-2gbxx {
  d: path("M9 8v6");
}

.ro1o_8s6w {
  fill: currentColor;
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sucbspb1m {
  d: path("M12 9.5V14");
}
</style><g class="hntgybcog"><path class="ro1o_8s6w"/><path class="k70w93buq"/><path class="f4yp5uw0u"/><path class="kjs-2gbxx"/><path class="sucbspb1m"/><path class="e3dol68is"/></g>`,
		"fallback": "iconmind:alert-fatigue-duotone-thin",
	});
}

export default Component;
