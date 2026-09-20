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
		"content": `<style>.jt2ihvbku {
  d: path("M2 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
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

.xpsk7ccmv {
  d: path("M2 19a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="s0phu2bbs"><path class="jt2ihvbku"/><path class="svmab0t4v"/><path class="xpsk7ccmv"/><path class="moemtk9nb"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:connection-pool-outline-bold",
	});
}

export default Component;
