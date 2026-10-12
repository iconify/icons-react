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
		"content": `<style>.s3dtvz_8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8.5h16.5a1 1 0 0 1 1 1v11.75h-3.5V19.5a5.75 5.75 0 0 0-11.5 0v1.75h-3.5V9.5a1 1 0 0 1 1-1m-1 3h18.5M2.75 5.25h18.5M7 5.25V8.5m5-3.25V8.5m5-3.25V8.5");
}
</style><path class="s3dtvz_8v"/>`,
		"fallback": "iconoven:arch-bridge",
	});
}

export default Component;
