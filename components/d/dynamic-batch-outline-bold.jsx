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
		"content": `<style>.ai4lm938y {
  d: path("M3.5 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.eo360lbaq {
  d: path("M8 4h2.5v16H8");
}

.k-nvl7u9w {
  d: path("M3.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k2mikoh9o {
  d: path("M3.5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.q485nsblw {
  d: path("M13 12h4");
}

.qd0z4jbov {
  d: path("M16.5 9.5 19 12l-2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k2mikoh9o"/><path class="k-nvl7u9w"/><path class="ai4lm938y"/><path class="eo360lbaq"/><path class="q485nsblw"/><path class="qd0z4jbov"/></g>`,
		"fallback": "iconmind:dynamic-batch-outline-bold",
	});
}

export default Component;
