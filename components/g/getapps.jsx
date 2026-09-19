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
		"content": `<style>.j3s9ivbxi {
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

.m_94wvbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.116 34.829v-7.657h6.016a1.88 1.88 0 0 1 1.88 1.88v5.777m3.872-7.658v7.658m-7.858-5.151v5.151");
}

.mya46y3it {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16 11.436a8 8 0 1 0 16 0");
}
</style><path class="mya46y3it"/><rect class="j3s9ivbxi"/><path class="m_94wvbpy"/>`,
		"fallback": "arcticons:getapps",
	});
}

export default Component;
