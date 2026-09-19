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
		"content": `<style>.cow_lc8_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 31.17V16.83h3.226A6.274 6.274 0 0 1 24 23.104v1.792a6.274 6.274 0 0 1-6.274 6.274zm19-9.59a4.75 4.75 0 0 0-4.75-4.75h0A4.75 4.75 0 0 0 24 21.58v4.84a4.75 4.75 0 0 0 4.75 4.75h0a4.75 4.75 0 0 0 4.75-4.75h-4.75");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="cow_lc8_t"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:dollar-general",
	});
}

export default Component;
