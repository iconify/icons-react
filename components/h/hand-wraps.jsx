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
		"content": `<style>.jwpx1c85l {
  d: path("M7.75 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.lv46g87zz {
  d: path("M3.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm13 0v12.5l4-1.5v-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lv46g87zz"/><path class="jwpx1c85l"/></g>`,
		"fallback": "uix-sharp:hand-wraps",
	});
}

export default Component;
