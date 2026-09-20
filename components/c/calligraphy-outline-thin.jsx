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

.mqs1sybxa {
  d: path("m13 3 4 4 -7 7 -4 -4Z");
}

.y1sgy9_rm {
  d: path("M13 20c3 -2 6 -2 8 0");
}

.ykenr4b4h {
  d: path("m8 12 -4 4v4h4l4 -4");
}
</style><g class="hntgybcog"><path class="mqs1sybxa"/><path class="ykenr4b4h"/><path class="y1sgy9_rm"/></g>`,
		"fallback": "iconmind:calligraphy-outline-thin",
	});
}

export default Component;
