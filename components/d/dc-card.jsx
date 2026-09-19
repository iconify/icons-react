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
		"content": `<style>.hor9tdmfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.25 34C20.53 34 24 29.523 24 24s-3.47-10-7.75-10H8.5v20zm15.5-20v20l7.75-7.75V34h-7.75C27.47 34 24 29.523 24 24s3.47-10 7.75-10h7.75v7.75z");
}

.pkink_bnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.25 34V14");
}

.thg6gcchx {
  width: 39px;
  height: 28px;
  x: 4.5px;
  y: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="hor9tdmfw"/><rect class="thg6gcchx"/><path class="pkink_bnx"/>`,
		"fallback": "arcticons:dc-card",
	});
}

export default Component;
