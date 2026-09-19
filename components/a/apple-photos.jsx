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
		"content": `<style>.dgtcxob7l {
  width: 13px;
  height: 20px;
  x: 29px;
  y: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.dnq8j0_tj {
  width: 13px;
  height: 20px;
  x: 25.632px;
  y: 22.132px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.e4_ayn-vy {
  width: 13px;
  height: 20px;
  x: 6px;
  y: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.f4b92ccmm {
  width: 13px;
  height: 20px;
  x: 17.5px;
  y: 25.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.g_ak9jbig {
  width: 13px;
  height: 20px;
  x: 25.632px;
  y: 5.868px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.j44uu8int {
  width: 13px;
  height: 20px;
  x: 9.368px;
  y: 5.868px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.kf4raybfb {
  width: 13px;
  height: 20px;
  x: 9.368px;
  y: 22.132px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}

.m-exjxiiu {
  width: 13px;
  height: 20px;
  x: 17.5px;
  y: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6.5px;
}
</style><rect class="m-exjxiiu"/><rect class="f4b92ccmm"/><rect transform="rotate(90 35.5 24)" class="dgtcxob7l"/><rect transform="rotate(90 12.5 24)" class="e4_ayn-vy"/><rect transform="rotate(45 32.132 15.868)" class="g_ak9jbig"/><rect transform="rotate(45 15.868 32.132)" class="kf4raybfb"/><rect transform="rotate(135 32.132 32.132)" class="dnq8j0_tj"/><rect transform="rotate(135 15.868 15.868)" class="j44uu8int"/>`,
		"fallback": "arcticons:apple-photos",
	});
}

export default Component;
