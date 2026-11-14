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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ncsly11vk {
  d: path("M11 8.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.wlhcxwbaj {
  d: path("M2.5 20.5c0-3 1.25-5 3-5s3 2 3 5Zm6.5 0C9 17 10.25 15 12 15s3 2 3 5.5Zm6.5 0c0-3 1.25-5 3-5s3 2 3 5ZM3.25 10.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.25 9a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m.25-.75h2.25m2.5 0h2.25");
}
</style><g class="hntgybcog"><path class="wlhcxwbaj"/><path class="ncsly11vk"/></g>`,
		"fallback": "uix:care-team",
	});
}

export default Component;
