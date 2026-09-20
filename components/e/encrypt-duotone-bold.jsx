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
		"content": `<style>.a8_u4qbvt {
  d: path("M14 10a3 3 0 0 1 6 0");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.lrtehacrs {
  d: path("m6 9 3 3 -3 3");
}

.nubd6obsf {
  d: path("M12 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tuygslbyc {
  fill: currentColor;
  d: path("M12 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="tuygslbyc"/><path class="e7pgrp-wx"/><path class="lrtehacrs"/><path class="nubd6obsf"/><path class="a8_u4qbvt"/></g>`,
		"fallback": "iconmind:encrypt-duotone-bold",
	});
}

export default Component;
