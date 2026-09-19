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
		"content": `<style>.ao79x5hzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.63 7.15a10.12 10.12 0 0 0-7.86 16.51h0L24 42.71l16.07-18.86l.08-.09l.08-.1h0A10.13 10.13 0 1 0 24 11.58a10.1 10.1 0 0 0-8.36-4.43Zm2.18 11.68l6.18-7.25");
}
</style><path class="ao79x5hzm"/>`,
		"fallback": "arcticons:healthmate",
	});
}

export default Component;
