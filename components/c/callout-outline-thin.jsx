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
		"content": `<style>.cu_n5qbwp {
  d: path("m7 9 -3 3 3 3");
}

.e19f68q3l {
  d: path("M10 9h9");
}

.f9dbawa5o {
  d: path("M10 13h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p3_ik-83z {
  d: path("M7 6a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="p3_ik-83z"/><path class="cu_n5qbwp"/><path class="e19f68q3l"/><path class="f9dbawa5o"/></g>`,
		"fallback": "iconmind:callout-outline-thin",
	});
}

export default Component;
