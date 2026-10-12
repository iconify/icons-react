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
		"content": `<style>.gz6olcczg {
  d: path("M4.5 20.25V15H9v5.25M6.75 15V7.75H17V12m-5.25-4.25v-4.5");
}

.hak_f-7gb {
  d: path("M14.5 20.25V12h5v8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gz6olcczg"/><path class="hak_f-7gb"/></g>`,
		"fallback": "iconoven:dendrogram",
	});
}

export default Component;
