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
		"content": `<style>.d9acmebfe {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.gjg57ibhd {
  fill: currentColor;
  d: path("M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kc5-9ib3u {
  d: path("M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.m1b4e0b4z {
  d: path("M6 11h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uxsptjbvt {
  d: path("M6 7h12");
}

.v1yds1b4t {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="v1yds1b4t"/><path class="gjg57ibhd"/><path class="d9acmebfe"/><path class="uxsptjbvt"/><path class="m1b4e0b4z"/><path class="kc5-9ib3u"/></g>`,
		"fallback": "iconmind:certificate-duotone-bold",
	});
}

export default Component;
