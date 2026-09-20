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
		"content": `<style>.ezcg76beu {
  fill: currentColor;
  d: path("M6 17a2.5 2.5 0 0 1 2.5 -2.5h7A2.5 2.5 0 0 1 18 17a2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 17");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsna4nwzl {
  fill: currentColor;
  d: path("M11 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ml5vh8o3m {
  d: path("M17 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.tfto2zbdp {
  d: path("M5 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xlz01ub4s {
  d: path("M11 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zieizabtx {
  fill: currentColor;
  d: path("M17 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zphfkjbir {
  fill: currentColor;
  d: path("M5 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ztxj-4b5g {
  d: path("M6 17a2.5 2.5 0 0 1 2.5 -2.5h7A2.5 2.5 0 0 1 18 17a2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 17");
}
</style><g class="hntgybcog"><path class="zphfkjbir"/><path class="lsna4nwzl"/><path class="zieizabtx"/><path class="ezcg76beu"/><path class="tfto2zbdp"/><path class="xlz01ub4s"/><path class="ml5vh8o3m"/><path class="n_1n94xtx"/><path class="ztxj-4b5g"/></g>`,
		"fallback": "iconmind:compaction-duotone-thin",
	});
}

export default Component;
