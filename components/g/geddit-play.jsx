import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_b5zfzpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.315 20.7a12.75 12.75 0 0 1-5.94 14.342a12.75 12.75 0 0 1-15.392-2.026a12.75 12.75 0 0 1-2.026-15.391a12.75 12.75 0 0 1 14.342-5.94m2.265-8.453A21.5 21.5 0 0 0 5.38 13.25a21.5 21.5 0 0 0 3.417 25.953A21.5 21.5 0 0 0 34.75 42.62a21.5 21.5 0 0 0 10.017-24.184L24 24");
}
</style><path class="g_b5zfzpn"/>`,
		"fallback": "arcticons:geddit-play",
	});
}

export default Component;
