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
		"content": `<style>.c0_f0ic8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h14.5q.75 0 .75.75v1.75q0 .75-.75.75h-4q-.75 0-.75.75v8.5q0 .75.75.75h4q.75 0 .75.75v1.75q0 .75-.75.75H4.75q-.75 0-.75-.75v-1.75q0-.75.75-.75h4q.75 0 .75-.75v-8.5Q9.5 7 8.75 7h-4Q4 7 4 6.25V4.5q0-.75.75-.75M12 9.5v5");
}
</style><path class="c0_f0ic8s"/>`,
		"fallback": "iconoven:i-beam",
	});
}

export default Component;
