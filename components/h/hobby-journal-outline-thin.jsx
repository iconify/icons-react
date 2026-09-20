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
		"content": `<style>.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ws9v8zbhe {
  d: path("M11 16h6");
}

.wuvisubmw {
  d: path("M8 3v18");
}

.zsd3khm8o {
  d: path("M16 3v9l-2 -2 -2 2V3");
}
</style><g class="hntgybcog"><path class="diipsobkl"/><path class="wuvisubmw"/><path class="zsd3khm8o"/><path class="ws9v8zbhe"/></g>`,
		"fallback": "iconmind:hobby-journal-outline-thin",
	});
}

export default Component;
