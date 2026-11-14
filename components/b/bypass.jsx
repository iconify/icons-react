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
		"content": `<style>.dkwmux50z {
  d: path("m4.439 12.061l2.5-2.5a1.5 1.5 0 0 1 2.122 0l2.5 2.5a1.5 1.5 0 0 1 .439 1.06V17a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 17v-3.879a1.5 1.5 0 0 1 .439-1.06M14 21.5c0-3.5 5.5-4.5 5.5-9S14 7 14 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lh606zbet {
  d: path("M11.5 6L14 3.5L16.5 6M8 18.5v-3");
}
</style><g class="hntgybcog"><path class="dkwmux50z"/><path class="lh606zbet"/></g>`,
		"fallback": "uix:bypass",
	});
}

export default Component;
