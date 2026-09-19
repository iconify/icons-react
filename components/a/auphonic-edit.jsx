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
		"content": `<style>.j5gtq7b4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.75c0-10.77-8.73-19.5-19.5-19.5S4.5 22.98 4.5 33.75");
}

.m9uuv3bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 33.75c0-7.456-6.044-13.5-13.5-13.5s-13.5 6.044-13.5 13.5");
}
</style><path class="j5gtq7b4i"/><path class="m9uuv3bbr"/>`,
		"fallback": "arcticons:auphonic-edit",
	});
}

export default Component;
