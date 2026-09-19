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
		"content": `<style>.hxo0aib0a {
  cx: 16.61px;
  cy: 19.071px;
  r: 3.744px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xemudzb9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 28.27c3.238 3.85 6.475 7.701 10.403 10.117c3.927 2.416 8.545 3.398 13.093 2.703s9.026-3.067 13.504-5.44M29.316 6.691l-5.1 26.159");
}

.znlfv63fk {
  cx: 36.164px;
  cy: 22.887px;
  r: 3.744px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="xemudzb9l"/><circle class="znlfv63fk"/><circle class="hxo0aib0a"/>`,
		"fallback": "arcticons:hangikredi",
	});
}

export default Component;
