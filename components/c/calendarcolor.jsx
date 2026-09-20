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
		"content": `<style>.f523s-4dl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.39a13 13 0 0 0-6.49 11.24a12.93 12.93 0 0 0 13 0A13 13 0 0 0 24 18.39");
}

.moq-nktbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.38a13 13 0 0 0-13 13a12.93 12.93 0 0 1 13 0a12.93 12.93 0 0 1 13 0a13 13 0 0 0-13-13M11 18.39a13 13 0 1 0 13 22.48a13 13 0 0 1-6.5-11.23A13 13 0 0 1 11 18.39m26 0a13 13 0 0 1-6.5 11.24A13 13 0 0 1 24 40.86A13 13 0 1 0 37 18.4Z");
}
</style><path class="moq-nktbf"/><path class="f523s-4dl"/>`,
		"fallback": "arcticons:calendarcolor",
	});
}

export default Component;
