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
		"content": `<style>.beuio438u {
  d: path("M5.5 2.5h15a1.5 3 0 0 1 0 6m-15 0v10h15v-10m-15-3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i31216-nv {
  d: path("m14.061 12.311l.128.128a1.5 1.5 0 0 1 0 2.122l-.128.128a1.5 1.5 0 0 1-2.122 0l-.128-.128a1.5 1.5 0 0 1 0-2.122l.128-.128a1.5 1.5 0 0 1 2.122 0M8.5 18.5V21m3-2.5V21m3-2.5V21m3-2.5V21");
}

.wovvs0bhs {
  d: path("M2.5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="wovvs0bhs"/><path class="beuio438u"/><path class="i31216-nv"/></g>`,
		"fallback": "uix:carpet-shop",
	});
}

export default Component;
