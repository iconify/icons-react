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
		"content": `<style>.cfd5cmuur {
  fill: currentColor;
  d: path("M8.5 8.5c-2-3-5.5-3.5-6 0c-.25 1.75.75 3 2 3v-2c1-1 2.5-.5 4 1Zm7 0c2-3 5.5-3.5 6 0c.25 1.75-.75 3-2 3v-2c-1-1-2.5-.5-4 1Z");
}

.cwd1wlblp {
  d: path("M8.5 9c0-1 1-1.5 3.5-1.5s3.5.5 3.5 1.5c0 3.5-1.5 6-2.25 7.5v4h-2.5v-4C10 15 8.5 12.5 8.5 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwd1wlblp"/><path class="cfd5cmuur"/></g>`,
		"fallback": "uix:fallopian-tubes",
	});
}

export default Component;
