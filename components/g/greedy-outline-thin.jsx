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
		"content": `<style>.azskw1rof {
  d: path("m9 16 5 -5");
}

.bie4u9bix {
  d: path("M19 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.fbyngunlt {
  d: path("M14 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="hntgybcog"><path class="zwghjjvbs"/><path class="azskw1rof"/><path class="fbyngunlt"/><path class="bie4u9bix"/></g>`,
		"fallback": "iconmind:greedy-outline-thin",
	});
}

export default Component;
