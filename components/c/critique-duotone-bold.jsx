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
		"content": `<style>.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xfkhbxb0u {
  d: path("M6 16 17 5");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}

.zf9agzw6m {
  d: path("M7 13h7");
}
</style><g class="s0phu2bbs"><path class="t5v_djbzx"/><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="kpspt_bpo"/><path class="zf9agzw6m"/><path class="xfkhbxb0u"/></g>`,
		"fallback": "iconmind:critique-duotone-bold",
	});
}

export default Component;
