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
		"content": `<style>.fynjz_bjk {
  d: path("M7.5 17a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm1gdl4et {
  d: path("M14 12v3");
}

.jyy9wu7cg {
  fill: currentColor;
  d: path("M7.5 17a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uy91f4czm {
  d: path("M13.69 2.37a4 4 0 1 1 -3.38 0");
}

.zpp3fehhr {
  d: path("M10 12v3");
}
</style><g class="hntgybcog"><path class="jyy9wu7cg"/><path class="uy91f4czm"/><path class="fynjz_bjk"/><path class="zpp3fehhr"/><path class="jm1gdl4et"/></g>`,
		"fallback": "iconmind:agent-toolbelt-duotone-thin",
	});
}

export default Component;
