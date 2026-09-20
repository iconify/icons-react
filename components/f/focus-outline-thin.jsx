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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fsv7g_bbj {
  d: path("M9 21H3v-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6e2wzbuh {
  d: path("M3 9V3h6");
}

.ne_b8wtyo {
  d: path("M21 15v6h-6");
}

.qtj-xccdg {
  d: path("M15 3h6v6");
}
</style><g class="hntgybcog"><path class="l6e2wzbuh"/><path class="qtj-xccdg"/><path class="ne_b8wtyo"/><path class="fsv7g_bbj"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:focus-outline-thin",
	});
}

export default Component;
