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

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.xjxf-fbjv {
  d: path("m13 9 2 -2");
}

.y09n-7bbz {
  d: path("m6 16 5 -5");
}

.z0_yphh3l {
  d: path("m17 5 2 -2");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="y09n-7bbz"/><path class="xjxf-fbjv"/><path class="z0_yphh3l"/></g>`,
		"fallback": "iconmind:forecast-outline-thin",
	});
}

export default Component;
