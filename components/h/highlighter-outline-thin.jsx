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

.mckspnbyn {
  d: path("M3 17h9");
}

.t3_tm1wcl {
  d: path("m14 8 4 -4");
}

.ucbzzjbat {
  d: path("m11 11 3 -3 2 2 -3 3Z");
}
</style><g class="hntgybcog"><path class="ucbzzjbat"/><path class="t3_tm1wcl"/><path class="mckspnbyn"/></g>`,
		"fallback": "iconmind:highlighter-outline-thin",
	});
}

export default Component;
