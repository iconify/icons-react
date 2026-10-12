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
		"content": `<style>.d9iqto-iw {
  width: 2.25px;
  height: 6.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nfbs7nhav {
  d: path("M5 12h2.5V6.75H11v10.5h3V6.75h3.5V12h3.75");
}
</style><g class="hntgybcog"><path class="nfbs7nhav"/><rect class="d9iqto-iw"/></g>`,
		"fallback": "iconoven:crankshaft",
	});
}

export default Component;
