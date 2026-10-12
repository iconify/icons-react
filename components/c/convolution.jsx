import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ajdaxebjd {
  width: 13px;
  height: 13px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}

.e2rclrsmn {
  width: 4.5px;
  height: 4.5px;
  x: 16.75px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxegwhbjl {
  d: path("m10.5 11l6.25-4");
}

.wc8iu3btr {
  width: 5px;
  height: 5px;
  x: 5.5px;
  y: 11px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="ajdaxebjd"/><rect class="wc8iu3btr"/><path class="vxegwhbjl"/><rect class="e2rclrsmn"/></g>`,
		"fallback": "iconoven:convolution",
	});
}

export default Component;
