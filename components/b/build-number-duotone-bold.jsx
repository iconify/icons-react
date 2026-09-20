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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.nzpfjab_r {
  fill: currentColor;
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qhoa1bbcv {
  d: path("M14 7v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wj4ljftik {
  d: path("M10 7v6");
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="s0phu2bbs"><path class="nzpfjab_r"/><path class="b0hkzgbgd"/><path class="wuk2mlziz"/><path class="wj4ljftik"/><path class="qhoa1bbcv"/><path class="l0zc9ibud"/></g>`,
		"fallback": "iconmind:build-number-duotone-bold",
	});
}

export default Component;
