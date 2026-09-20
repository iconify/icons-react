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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksl2475bx {
  d: path("M13 14.5h4.5");
}

.sfnyx4wnk {
  d: path("M6 6v14");
}

.yqike0hdz {
  d: path("m9 9.5 2.5 2.5L9 14.5");
}
</style><g class="hntgybcog"><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="yqike0hdz"/><path class="ksl2475bx"/></g>`,
		"fallback": "iconmind:container-exec-outline-thin",
	});
}

export default Component;
