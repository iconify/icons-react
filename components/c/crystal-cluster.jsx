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
		"content": `<style>.pfnfw3c8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.25V7.75q0-1 .53-1.85l1.44-2.3q.53-.85 1.06 0l1.44 2.3q.53.85.53 1.85v12.5q0 1-1 1h-3q-1 0-1-1M3 20.5v-7.25q0-.75.43-1.36l.89-1.28q.43-.61.86 0l.89 1.28q.43.61.43 1.36v7.25q0 .75-.75.75h-2q-.75 0-.75-.75m14.5 0v-7.25q0-.75.43-1.36l.89-1.28q.43-.61.86 0l.89 1.28q.43.61.43 1.36v7.25q0 .75-.75.75h-2q-.75 0-.75-.75M12 8v9.5");
}
</style><path class="pfnfw3c8e"/>`,
		"fallback": "iconoven:crystal-cluster",
	});
}

export default Component;
