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
		"content": `<style>.mj9gxluwf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.25 5.5q0-2.25 3.25-2.25t3.25 2.25T9.5 7.75T6.25 5.5M15 8.25q-4.25 0-4.25 2.75T15 13.75q1.649 0 2.847-.685Q19.25 12.264 19.25 11t-1.403-2.065Q16.649 8.25 15 8.25M3.75 17.5q0-1.477 1.704-2.423Q6.942 14.25 9 14.25q5.25 0 5.25 3.25T9 20.75T3.75 17.5");
}
</style><path class="mj9gxluwf"/>`,
		"fallback": "uix-solid:garden-path",
	});
}

export default Component;
