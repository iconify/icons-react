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
		"content": `<style>.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kf_2z4bao {
  cx: 17px;
  cy: 17.5px;
  r: 1.5px;
}

.qt2xr1blz {
  d: path("M6.5 6.5h9.25a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 15.75 12h-7.5a1.75 1.75 0 0 0-1.75 1.75v2a1.75 1.75 0 0 0 1.75 1.75H13");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="qt2xr1blz"/><circle class="kf_2z4bao"/></g>`,
		"fallback": "iconoven:board-game",
	});
}

export default Component;
