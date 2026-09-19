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
		"content": `<style>.fsx_juhum {
  width: 18.306px;
  height: 13.303px;
  x: 14.847px;
  y: 18.322px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.652px;
  ry: 6.652px;
}

.mjkp-82dp {
  width: 39px;
  height: 26.667px;
  x: 4.5px;
  y: 10.666px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.334px;
  ry: 13.334px;
}

.swtcc0ajq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.847 24.974V11.007");
}
</style><rect class="mjkp-82dp"/><rect class="fsx_juhum"/><path class="swtcc0ajq"/>`,
		"fallback": "arcticons:boulanger",
	});
}

export default Component;
