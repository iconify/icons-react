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
		"content": `<style>.kf_1mtbyt {
  d: path("M2 17.5A3.5 3.5 0 0 1 5.5 14h5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1 -3.5 3.5h-5A3.5 3.5 0 0 1 2 17.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ofbx_zbbk {
  d: path("m17 6.5 2 2L21.5 6");
}

.ttkfxbkqk {
  d: path("m21.5 15 -4 4");
}

.vni_a1bnj {
  d: path("m17.5 15 4 4");
}

.yp1d4twrm {
  d: path("M2 6.5A3.5 3.5 0 0 1 5.5 3h5A3.5 3.5 0 0 1 14 6.5a3.5 3.5 0 0 1 -3.5 3.5h-5A3.5 3.5 0 0 1 2 6.5");
}
</style><g class="nrj6p8qat"><path class="yp1d4twrm"/><path class="ofbx_zbbk"/><path class="kf_1mtbyt"/><path class="vni_a1bnj"/><path class="ttkfxbkqk"/></g>`,
		"fallback": "iconmind:dpo-outline-regular",
	});
}

export default Component;
