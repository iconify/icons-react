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
		"content": `<style>.eai3f7b8u {
  cx: 22.5px;
  cy: 22.2px;
  r: 16.7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p77bwrbkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.4 27.4l10.2-10.1l-5-5v19.9l5-5L17.4 17");
}

.qhgja6bzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.2 34.3l8 8.2");
}
</style><path class="qhgja6bzw"/><circle class="eai3f7b8u"/><path class="p77bwrbkc"/>`,
		"fallback": "arcticons:bluetooth-scanner",
	});
}

export default Component;
