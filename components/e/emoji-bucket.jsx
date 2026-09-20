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
		"content": `<style>.j5tv7l8ud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.86 24.315a.83.83 0 0 0 .825-.835v-.575a3.21 3.21 0 0 0-3.192-3.23H15.446a3.21 3.21 0 0 0-3.192 3.23v.574a.83.83 0 0 0 .825.835zM27.417 7.423a15.01 15.01 0 0 1 11.091 14.688M20.504 7.445A15.01 15.01 0 0 0 9.491 22.111m.006.017h2.847m23.264.053h2.902");
}

.kam34rb6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.502 5.5h6.93v3.737h-6.93z");
}

.sei87wopv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.16 24.315l-2.321 16.37a2.057 2.057 0 0 1-2.033 1.815h-12.02a2.057 2.057 0 0 1-2.035-1.836l-1.608-16.35");
}
</style><path class="sei87wopv"/><path class="j5tv7l8ud"/><path class="kam34rb6z"/>`,
		"fallback": "arcticons:emoji-bucket",
	});
}

export default Component;
