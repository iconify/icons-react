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
		"content": `<style>.cbq8-eboh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 14.5h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dotyiqbdy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 11V8h5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.et-iwmblh {
  d: path("M2 18v-7h20v7");
}

.m1sxkkbgc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18v-7h20v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qitpg1b_y {
  d: path("M13 11V8h5v3");
}

.rc8xkcb_g {
  d: path("M4 11V8h5v3");
}

.rrw43cnoe {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 11V8h5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wg1ykyaxv {
  d: path("M2 14.5h20");
}
</style><g class="s0phu2bbs"><path class="m1sxkkbgc"/><path class="cbq8-eboh"/><path class="rrw43cnoe"/><path class="dotyiqbdy"/><path class="et-iwmblh"/><path class="wg1ykyaxv"/><path class="rc8xkcb_g"/><path class="qitpg1b_y"/></g>`,
		"fallback": "iconmind:double-bed-duotone-bold",
	});
}

export default Component;
