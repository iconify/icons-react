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

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.y334m4yqh {
  d: path("M9 8h6v4H9Z");
}

.y7d5mpfbz {
  d: path("M10 20v-5h4v5");
}
</style><g class="hntgybcog"><path class="hwufvfb8q"/><path class="y7d5mpfbz"/><path class="y334m4yqh"/></g>`,
		"fallback": "iconmind:home-front-outline-thin",
	});
}

export default Component;
