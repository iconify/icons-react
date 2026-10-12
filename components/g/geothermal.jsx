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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oz683kbwp {
  width: 18.5px;
  height: 8.75px;
  x: 2.75px;
  y: 12.5px;
  rx: 2.5px;
}

.ts6ik8buj {
  cx: 12px;
  cy: 16.875px;
  r: 2px;
}

.ymd_5iu5a {
  d: path("M8 9.5c-.75-.75-.75-1.75 0-2.5s.75-1.75 0-2.5m4 5c-.75-.75-.75-1.75 0-2.5s.75-1.75 0-2.5m4 5c-.75-.75-.75-1.75 0-2.5s.75-1.75 0-2.5");
}
</style><g class="hntgybcog"><rect class="oz683kbwp"/><circle class="ts6ik8buj"/><path class="ymd_5iu5a"/></g>`,
		"fallback": "iconoven:geothermal",
	});
}

export default Component;
