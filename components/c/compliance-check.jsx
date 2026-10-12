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
		"content": `<style>.chzfwj38b {
  width: 15.5px;
  height: 16px;
  x: 4.25px;
  y: 5.25px;
  rx: 2px;
}

.hbhb4g6hn {
  d: path("m7.5 10.75l1 1l1.75-2M7.5 16l1 1l1.75-2m2.25-4h4m-4 5.25h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t-yt_ibzq {
  width: 7.5px;
  height: 5px;
  x: 8.25px;
  y: 2.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="chzfwj38b"/><rect class="t-yt_ibzq"/><path class="hbhb4g6hn"/></g>`,
		"fallback": "iconoven:compliance-check",
	});
}

export default Component;
