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
		"content": `<style>.bd9evwuyg {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.fl4996b6i {
  d: path("M17 15v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.slranxf_s {
  d: path("M7 15v5");
}

.vj3n1x6je {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xyf3o9drf {
  d: path("M12 15v5");
}
</style><g class="hntgybcog"><path class="vj3n1x6je"/><path class="bd9evwuyg"/><path class="jof7c9fpk"/><path class="slranxf_s"/><path class="xyf3o9drf"/><path class="fl4996b6i"/></g>`,
		"fallback": "iconmind:air-conditioner-duotone-thin",
	});
}

export default Component;
