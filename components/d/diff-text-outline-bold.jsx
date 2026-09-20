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
		"content": `<style>.cpjs7jb_n {
  d: path("M8.5 6H21");
}

.fkhwqab8s {
  d: path("M8.5 18H21");
}

.jx5-n36vx {
  d: path("M2.5 6h3");
}

.qyfk67htz {
  d: path("M4 4.5v3");
}

.risyu_bcj {
  d: path("M2.5 12h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvtsuii2m {
  d: path("M8.5 12H21");
}
</style><g class="s0phu2bbs"><path class="jx5-n36vx"/><path class="qyfk67htz"/><path class="risyu_bcj"/><path class="cpjs7jb_n"/><path class="wvtsuii2m"/><path class="fkhwqab8s"/></g>`,
		"fallback": "iconmind:diff-text-outline-bold",
	});
}

export default Component;
