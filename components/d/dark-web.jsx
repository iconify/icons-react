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
		"content": `<style>.ek5ll1bof {
  d: path("M8 12a4 9.5 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.tdyqazwng {
  fill: currentColor;
  d: path("M5.5 12a6.5 6.5 0 0 0 13 0Z");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ek5ll1bof"/><path class="tdyqazwng"/></g>`,
		"fallback": "uix:dark-web",
	});
}

export default Component;
