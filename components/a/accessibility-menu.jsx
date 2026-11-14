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
		"content": `<style>.bex2d4d2t {
  d: path("m7.5 9.5l4.5 1l4.5-1m-4.5 1v3m-2.5 4l2.5-4l2.5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x40y7lb3u {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 6.75h.01");
}
</style><g class="hntgybcog"><path class="x40y7lb3u"/><path class="bex2d4d2t"/></g>`,
		"fallback": "uix:accessibility-menu",
	});
}

export default Component;
