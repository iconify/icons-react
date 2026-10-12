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

.ozbkogu8p {
  d: path("M2.75 13.5h3.5M4 11.25l2.25 2.25L4 15.75m17.25-2.25h-3.5M20 11.25l-2.25 2.25L20 15.75");
}

.rvz2p2kqt {
  d: path("m13.07 15.87l-.2.2q-.71.71-1.42 0l-3.52-3.52q-.71-.71 0-1.42l.2-.2q.71-.71 1.42 0l3.52 3.52q.71.71 0 1.42M11.3 12.7l5.2-5.2");
}

.zqxl_0ooy {
  width: 10px;
  height: 2.5px;
  x: 7px;
  y: 18.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="rvz2p2kqt"/><rect class="zqxl_0ooy"/><path class="ozbkogu8p"/></g>`,
		"fallback": "iconoven:arbitration",
	});
}

export default Component;
