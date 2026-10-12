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
		"content": `<style>.aythsibbt {
  d: path("m2.75 9.5l8 5.5l8-5.5");
}

.go4py7bii {
  d: path("M6 8.5v-2A1.5 1.5 0 0 1 7.5 5h12.25a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yi810b21w {
  width: 16px;
  height: 12.75px;
  x: 2.75px;
  y: 8.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="go4py7bii"/><rect class="yi810b21w"/><path class="aythsibbt"/></g>`,
		"fallback": "iconoven:envelope-stack",
	});
}

export default Component;
