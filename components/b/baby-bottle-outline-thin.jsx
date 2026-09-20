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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdl213b6n {
  d: path("M7 21V9h10v12Z");
}

.yhnjhi90f {
  d: path("M10 9V6.5a2 2 0 0 1 4 0V9");
}
</style><g class="hntgybcog"><path class="wdl213b6n"/><path class="cfd43lbgp"/><path class="yhnjhi90f"/></g>`,
		"fallback": "iconmind:baby-bottle-outline-thin",
	});
}

export default Component;
