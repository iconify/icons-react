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
		"content": `<style>.ahp9s2bzp {
  d: path("M3 6h18v5H3Z");
}

.c5j4o4mzi {
  fill: currentColor;
  d: path("M3 6h18v5H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h2va4xb2x {
  d: path("M17 11v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6x6uv-ap {
  d: path("M12 11v8");
}

.qyottkbqu {
  d: path("M7 11v8");
}
</style><g class="hntgybcog"><path class="c5j4o4mzi"/><path class="ahp9s2bzp"/><path class="qyottkbqu"/><path class="k6x6uv-ap"/><path class="h2va4xb2x"/></g>`,
		"fallback": "iconmind:hair-duotone-thin",
	});
}

export default Component;
