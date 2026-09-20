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
		"content": `<style>.gudl2cg4z {
  fill: currentColor;
  d: path("M8 8h5l3 3 -3 3H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}

.sqmravmye {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xa3yjwu7k {
  d: path("M8 8h5l3 3 -3 3H8Z");
}
</style><g class="hntgybcog"><path class="sqmravmye"/><path class="gudl2cg4z"/><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="xa3yjwu7k"/></g>`,
		"fallback": "iconmind:chat-tag-duotone-thin",
	});
}

export default Component;
