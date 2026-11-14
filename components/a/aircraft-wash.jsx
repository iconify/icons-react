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
		"content": `<style>.jbhbkbchc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5v-7H4L7.5 16h12a1.75 1.75 0 0 1 0 3.5Zm8 0l2 2M6 3l1.25 3a1.5 1.5 0 1 1-2.5 0Zm6 0l1.25 3a1.5 1.5 0 1 1-2.5 0Zm6 0l1.25 3a1.5 1.5 0 1 1-2.5 0Z");
}
</style><path class="jbhbkbchc"/>`,
		"fallback": "uix:aircraft-wash",
	});
}

export default Component;
