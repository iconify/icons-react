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
		"content": `<style>.au3bi8b4g {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M2.75 14.5h10m-2.5-2.5l2.5 2.5l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.meb583b4d {
  d: path("M4.75 11.25v-6a2.5 2.5 0 0 1 2.5-2.5h6.5l5.5 5.5v10.5a2.5 2.5 0 0 1-2.5 2.5h-9.5a2.5 2.5 0 0 1-2.5-2.5v-1");
}
</style><g class="hntgybcog"><path class="meb583b4d"/><path class="au3bi8b4g"/></g>`,
		"fallback": "iconoven:file-import",
	});
}

export default Component;
