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
		"content": `<style>.dhtq24lfs {
  d: path("m17 9.5 2.5 2.5 -2.5 2.5");
}

.lqiw_3bos {
  d: path("M10 12h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pr6npvbsh {
  d: path("m3 5 6 6");
}

.xxvssxb6x {
  d: path("m3 19 6 -6");
}
</style><g class="nrj6p8qat"><path class="pr6npvbsh"/><path class="xxvssxb6x"/><path class="lqiw_3bos"/><path class="dhtq24lfs"/></g>`,
		"fallback": "iconmind:hybrid-fuse-outline-regular",
	});
}

export default Component;
