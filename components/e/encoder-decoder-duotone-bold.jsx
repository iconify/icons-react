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
		"content": `<style>.ajw5g_mzy {
  d: path("M10.5 9.5 13 12l-2.5 2.5");
}

.okcmurbzx {
  fill: currentColor;
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pquf1ccxc {
  d: path("M2 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qv4k8z3yq {
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.siqrysbwb {
  fill: currentColor;
  d: path("M2 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="siqrysbwb"/><path class="okcmurbzx"/><path class="pquf1ccxc"/><path class="qv4k8z3yq"/><path class="ajw5g_mzy"/></g>`,
		"fallback": "iconmind:encoder-decoder-duotone-bold",
	});
}

export default Component;
