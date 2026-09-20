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
		"content": `<style>.cmfzxibyz {
  d: path("M17 15v3.5");
}

.e2nq-yvbg {
  d: path("M12 15v6");
}

.kzwfngmve {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yyw12k01a {
  d: path("M7 15v3.5");
}
</style><g class="s0phu2bbs"><path class="kzwfngmve"/><path class="yyw12k01a"/><path class="e2nq-yvbg"/><path class="cmfzxibyz"/></g>`,
		"fallback": "iconmind:glacier-tier-outline-bold",
	});
}

export default Component;
