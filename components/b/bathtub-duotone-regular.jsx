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
		"content": `<style>.kst16lb8k {
  d: path("M6 18.5V21");
}

.mfoopsbgc {
  d: path("M3 11V7");
}

.njyk7_bbr {
  d: path("M3 11h18v4a4 4 0 0 1 -4 4H7a4 4 0 0 1 -4 -4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pcd4uib5v {
  fill: currentColor;
  d: path("M3 11h18v4a4 4 0 0 1 -4 4H7a4 4 0 0 1 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yjd2gm3-w {
  d: path("M18 18.5V21");
}
</style><g class="nrj6p8qat"><path class="pcd4uib5v"/><path class="njyk7_bbr"/><path class="kst16lb8k"/><path class="yjd2gm3-w"/><path class="mfoopsbgc"/></g>`,
		"fallback": "iconmind:bathtub-duotone-regular",
	});
}

export default Component;
