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
		"content": `<style>.bitbxoblb {
  d: path("M6 12h3.5a2 2 0 0 1 0 4H7m1.25 3h7a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-7A1.25 1.25 0 0 1 7 20.25A1.25 1.25 0 0 1 8.25 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.smd5nc9bz {
  d: path("M6 11a6 6 0 0 1 12-1.5V13a6 6 0 0 1-6 6H9a3 3 0 0 1-3-3Z");
}
</style><g class="hntgybcog"><path class="smd5nc9bz"/><path class="bitbxoblb"/></g>`,
		"fallback": "uix:boxing-workout",
	});
}

export default Component;
