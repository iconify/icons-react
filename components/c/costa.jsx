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
		"content": `<style>.g_44lc0cc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.656 25.297H35.25m-.844 2.548l2.547-7.69l2.547 7.69m-16.691.842c.471-.614 1.063-.842 1.885-.842h1.132c1.06 0 1.918-.86 1.918-1.919v-.008c0-1.06-.858-1.918-1.918-1.918h-1.255a1.92 1.92 0 0 1-1.92-1.92h0c0-1.063.86-1.925 1.924-1.925h1.132c.822 0 1.414-.228 1.885-.842");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.o-cwijb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.312 20.155h5.094m-2.547 7.69v-7.69m-18.265 5.111v.032a2.547 2.547 0 0 1-2.547 2.547h0A2.547 2.547 0 0 1 8.5 25.298v-2.595a2.547 2.547 0 0 1 2.547-2.548h0a2.547 2.547 0 0 1 2.547 2.548v.031");
}

.z1p7nk7-r {
  width: 5.094px;
  height: 7.689px;
  x: 15.594px;
  y: 20.155px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.547px;
  ry: 2.547px;
}
</style><path class="o-cwijb-g"/><rect class="z1p7nk7-r"/><path class="g_44lc0cc"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:costa",
	});
}

export default Component;
