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
		"content": `<style>.ewz8zthqv {
  d: path("m9.5 10l2.5 2.5l2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rz2w7lb3r {
  d: path("M6.5 16.5v-11A2.5 2.5 0 0 1 9 3h6a2.5 2.5 0 0 1 2.5 2.5v11m-12.25 0h13.5A2.25 2.25 0 0 1 21 18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75a2.25 2.25 0 0 1 2.25-2.25M12 6v6.5");
}
</style><g class="hntgybcog"><path class="rz2w7lb3r"/><path class="ewz8zthqv"/></g>`,
		"fallback": "uix:auto-empty-dock",
	});
}

export default Component;
