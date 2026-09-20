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
		"content": `<style>.jb_v2ub8s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mmx2_7bmn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.q80kgo3im {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="s0phu2bbs"><path class="mmx2_7bmn"/><path class="q80kgo3im"/><path class="jb_v2ub8s"/><path class="mpjdm200q"/><path class="tkeq0bpvv"/><path class="vslz5yb3q"/></g>`,
		"fallback": "iconmind:heading-duotone-bold",
	});
}

export default Component;
