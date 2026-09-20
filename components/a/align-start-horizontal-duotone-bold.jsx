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
		"content": `<style>.b26q0zi5z {
  d: path("M14 7h4v6h-4Z");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.rtofn9dtv {
  d: path("M7 7h4v10H7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ti3rw-2xs {
  fill: currentColor;
  d: path("M14 7h4v6h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x20zxc0rm {
  fill: currentColor;
  d: path("M7 7h4v10H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="x20zxc0rm"/><path class="ti3rw-2xs"/><path class="mg7aqnbsf"/><path class="rtofn9dtv"/><path class="b26q0zi5z"/></g>`,
		"fallback": "iconmind:align-start-horizontal-duotone-bold",
	});
}

export default Component;
