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

.eb35pyb6t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 16h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.elo9fvbju {
  fill: currentColor;
  d: path("M14 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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

.t1ic5ob8h {
  fill: currentColor;
  d: path("M19 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xvr6s5efs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 16 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="hntgybcog"><path class="elo9fvbju"/><path class="t1ic5ob8h"/><path class="eb35pyb6t"/><path class="xvr6s5efs"/><path class="zwghjjvbs"/><path class="azskw1rof"/><path class="fbyngunlt"/><path class="bie4u9bix"/></g>`,
		"fallback": "iconmind:greedy-duotone-thin",
	});
}

export default Component;
