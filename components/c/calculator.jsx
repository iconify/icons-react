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
		"content": `<style>.liuuzzbvv {
  width: 8.5px;
  height: 3.5px;
  x: 7.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.p962h-hlg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 13h.01M12 13h.01m3.49 0h.01M8.5 17h.01M12 17h.01m3.49 0h.01");
}

.v3x3kdbao {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="v3x3kdbao"/><rect class="liuuzzbvv"/><path class="p962h-hlg"/></g>`,
		"fallback": "iconoven:calculator",
	});
}

export default Component;
