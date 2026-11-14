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
		"content": `<style>.d2kfgabxw {
  d: path("M11 7.5c2-1.5 8.5-1.5 8.5 5c0 5-4 8-8.5 8c-4 0-6.5-2.5-6.5-5.5c0-1.5 1-2.5 2.5-2.5c2 0 2-2.5 2-3.5Zm-1.5-5v6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3scrsbcw {
  d: path("M12.5 2.5v7c0 1.5 1 2.75 2.5 3.25");
}

.i5lcxlbmo {
  fill: currentColor;
  d: path("M14.5 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="d2kfgabxw"/><path class="i3scrsbcw"/><path class="i5lcxlbmo"/></g>`,
		"fallback": "uix:endoscopy",
	});
}

export default Component;
