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
		"content": `<style>.cv_7_4bvk {
  cx: 12px;
  cy: 6.25px;
  r: 3.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.th_wd4boo {
  d: path("M7.25 16.25h9.5a.75.75 0 0 0 .75-.75c0-2.03-2.53-3.5-5.5-3.5s-5.5 1.47-5.5 3.5a.75.75 0 0 0 .75.75");
}

.v-datx-di {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 16.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><circle class="cv_7_4bvk"/><path class="th_wd4boo"/><rect class="v-datx-di"/></g>`,
		"fallback": "iconoven:executive",
	});
}

export default Component;
