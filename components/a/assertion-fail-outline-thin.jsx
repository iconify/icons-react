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
		"content": `<style>.a5c-jhmhz {
  d: path("m14 13 -4 4");
}

.gjjx1zbjy {
  d: path("m10 13 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}
</style><g class="hntgybcog"><path class="sgjb9gifn"/><path class="gjjx1zbjy"/><path class="a5c-jhmhz"/></g>`,
		"fallback": "iconmind:assertion-fail-outline-thin",
	});
}

export default Component;
