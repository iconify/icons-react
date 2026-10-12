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
		"content": `<style>.cuu-5bbsj {
  d: path("M19 8h2.25M6.5 17.25H10");
}

.daejfpnvt {
  width: 2.5px;
  height: 4.5px;
  x: 16.5px;
  y: 5.75px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ndpz6rqpf {
  d: path("M5 4.75h9.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-3.75l.75 8.4a1 1 0 0 1-1 1.1H6.75a1 1 0 0 1-1-1.1l.75-8.4H5A2.25 2.25 0 0 1 2.75 9V7A2.25 2.25 0 0 1 5 4.75");
}
</style><g class="hntgybcog"><path class="ndpz6rqpf"/><rect class="daejfpnvt"/><path class="cuu-5bbsj"/></g>`,
		"fallback": "iconoven:drill",
	});
}

export default Component;
