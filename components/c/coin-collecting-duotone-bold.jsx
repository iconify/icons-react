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
		"content": `<style>.gcy6xobcc {
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.lez94ab8w {
  d: path("M15 6c3 1 5 3 5 6s-2 5 -5 6");
}

.ni8b__upb {
  fill: currentColor;
  d: path("M7 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nu-uxtbks {
  fill: currentColor;
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.snl1mwbpd {
  d: path("M7 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="nu-uxtbks"/><path class="ni8b__upb"/><path class="gcy6xobcc"/><path class="snl1mwbpd"/><path class="lez94ab8w"/></g>`,
		"fallback": "iconmind:coin-collecting-duotone-bold",
	});
}

export default Component;
