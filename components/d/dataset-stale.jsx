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
		"content": `<style>.evn8p1bdj {
  d: path("M13.25 12A3.25 3.25 0 0 1 10 15.25M16.5 12a6.5 6.5 0 0 1-6.5 6.5m0-6.5l7 3m-7-3l5 5m-5-5l3 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lmbo0oiji {
  fill: currentColor;
  d: path("M3 9V6a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 6v3Z");
}

.z2p-utlct {
  d: path("M3 9v9a2.5 2.5 0 0 0 2.5 2.5h13A2.5 2.5 0 0 0 21 18V9M3 12h18M10 9v11.5");
}
</style><g class="hntgybcog"><path class="lmbo0oiji"/><path class="z2p-utlct"/><path class="evn8p1bdj"/></g>`,
		"fallback": "uix:dataset-stale",
	});
}

export default Component;
