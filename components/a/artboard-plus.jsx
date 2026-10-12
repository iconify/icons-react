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

.qwg5kl0zx {
  d: path("M2.75 3.5h6m8-.75v1.5m3 3h1.5m-1.5 11h1.5m-4.5 3v-1.5");
}

.suot8mbzd {
  width: 14px;
  height: 11px;
  x: 2.75px;
  y: 7.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="suot8mbzd"/><path class="qwg5kl0zx"/></g>`,
		"fallback": "iconoven:artboard-plus",
	});
}

export default Component;
