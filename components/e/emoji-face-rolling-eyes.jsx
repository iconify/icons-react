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
		"content": `<style>.hrlc7gpty {
  cx: 16.238px;
  cy: 18.832px;
  r: 2.473px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i50ntzwxs {
  cx: 16.238px;
  cy: 21.305px;
  r: 4.947px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.le1rdibsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54");
}

.p12xhqzfh {
  cx: 31.762px;
  cy: 18.832px;
  r: 2.473px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uehkm6xfg {
  cx: 31.762px;
  cy: 21.305px;
  r: 4.947px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zqa2nj99r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.978 30.658h8.044");
}
</style><path class="le1rdibsu"/><circle class="i50ntzwxs"/><circle class="uehkm6xfg"/><path class="zqa2nj99r"/><circle class="hrlc7gpty"/><circle class="p12xhqzfh"/>`,
		"fallback": "arcticons:emoji-face-rolling-eyes",
	});
}

export default Component;
