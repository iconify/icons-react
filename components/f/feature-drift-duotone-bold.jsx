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
		"content": `<style>.mmx2_7bmn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.qrn866ncb {
  d: path("m10 9 3 3 3 -3 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y9bks8b3m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 9 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="mmx2_7bmn"/><path class="y9bks8b3m"/><path class="mpjdm200q"/><path class="qrn866ncb"/></g>`,
		"fallback": "iconmind:feature-drift-duotone-bold",
	});
}

export default Component;
