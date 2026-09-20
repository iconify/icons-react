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
		"content": `<style>.cgx6h63ll {
  d: path("M8 13v8l3 -3 3 3v-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tyca9wtqq {
  d: path("m9 8 2 2 4 -4");
}

.ztq2uyxtt {
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8");
}
</style><g class="hntgybcog"><path class="ztq2uyxtt"/><path class="cgx6h63ll"/><path class="tyca9wtqq"/></g>`,
		"fallback": "iconmind:distinction-outline-thin",
	});
}

export default Component;
