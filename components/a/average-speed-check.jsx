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
		"content": `<style>.sy90i8bmh {
  d: path("M2.5 17v-2.5l2.5-.75L7 11h4.5l2 2.75l2.25.75V17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1rmb_fnq {
  d: path("M3.75 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 3h9.5v5H12Zm6.5 5v13.5");
}
</style><g class="ulnmmdpxh"><path class="sy90i8bmh"/><path class="z1rmb_fnq"/></g>`,
		"fallback": "uix-sharp:average-speed-check",
	});
}

export default Component;
