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
		"content": `<style>.kbaghgqhh {
  fill: currentColor;
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l0njnitvz {
  d: path("M8.5 4a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.o5uqjjbch {
  d: path("m8 13 3 3 6 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-wfn8s9t {
  fill: currentColor;
  d: path("M8.5 4a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zva0qcbrg {
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="kbaghgqhh"/><path class="t-wfn8s9t"/><path class="zva0qcbrg"/><path class="l0njnitvz"/><path class="o5uqjjbch"/></g>`,
		"fallback": "iconmind:compliance-duotone-bold",
	});
}

export default Component;
