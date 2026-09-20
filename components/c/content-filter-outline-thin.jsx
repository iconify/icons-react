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

.ma3v2ffsn {
  d: path("m9 9 3 3v3");
}

.u8ebpfbzk {
  d: path("m15 9 -3 3");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="hntgybcog"><path class="ymp2b4b6u"/><path class="ma3v2ffsn"/><path class="u8ebpfbzk"/></g>`,
		"fallback": "iconmind:content-filter-outline-thin",
	});
}

export default Component;
