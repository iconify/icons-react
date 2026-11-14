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

.jec5cf1if {
  d: path("M8.5 12v7a6 2.5 0 0 0 12 0v-7M3 4.5a6 2.25 0 1 0 12 0a6 2.25 0 1 0-12 0");
}

.sd78bdv7m {
  d: path("M8.5 12a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0");
}

.xqqyh46ln {
  d: path("M3 4.5v8a6 2.25 0 0 0 2.5 1.75");
}
</style><g class="hntgybcog"><path class="sd78bdv7m"/><path class="jec5cf1if"/><path class="xqqyh46ln"/></g>`,
		"fallback": "uix:database-replica",
	});
}

export default Component;
