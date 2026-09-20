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
		"content": `<style>.agce8nbhp {
  fill: currentColor;
  d: path("M14 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j1dy6hbmb {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jt2ihvbku {
  d: path("M2 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.ko7uhih5e {
  fill: currentColor;
  d: path("M2 19a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.moemtk9nb {
  d: path("M14 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.svmab0t4v {
  d: path("M2 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.uj5coxtbu {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xpsk7ccmv {
  d: path("M2 19a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="s0phu2bbs"><path class="j1dy6hbmb"/><path class="uj5coxtbu"/><path class="ko7uhih5e"/><path class="agce8nbhp"/><path class="jt2ihvbku"/><path class="svmab0t4v"/><path class="xpsk7ccmv"/><path class="moemtk9nb"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:connection-pool-duotone-bold",
	});
}

export default Component;
