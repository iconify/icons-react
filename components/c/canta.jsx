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
		"content": `<style>.d1leh5biw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.33 28.76v7.64h9.34m-9.34-7.64h-3.34m16.02 0h-3.34m0 0v7.63M16 28.76l8-9.15m8.01 9.15L24 19.61M6 8.98h9.5l1.47-1.7h14.06l1.45 1.61l9.52.09v4.23H6z");
}

.hzp3k-4mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.06 13.34v23.45a4 4 0 0 1-4 4H12.43a4.49 4.49 0 0 1-4.49-4.48V13.34z");
}
</style><path class="hzp3k-4mt"/><path class="d1leh5biw"/>`,
		"fallback": "arcticons:canta",
	});
}

export default Component;
