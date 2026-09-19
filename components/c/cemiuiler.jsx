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
		"content": `<style>.g3s3inbcr {
  width: 23.746px;
  height: 23.746px;
  x: 7.953px;
  y: 9.334px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.418px;
  ry: 4.418px;
}

.ga44vac0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.425 18.449A12.149 12.149 0 1 1 21.76 37.56");
}

.yamwi8bmn {
  cx: 37.254px;
  cy: 10.194px;
  r: 2.761px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect transform="rotate(-25 19.826 21.207)" class="g3s3inbcr"/><circle class="yamwi8bmn"/><path class="ga44vac0l"/>`,
		"fallback": "arcticons:cemiuiler",
	});
}

export default Component;
