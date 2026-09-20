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
		"content": `<style>.acx2mjbnt {
  d: path("M12 11v6");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.kic8axbqv {
  d: path("m12 5 8 8a8 8 0 1 1 -16 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vztq54byw {
  fill: currentColor;
  d: path("m12 5 8 8a8 8 0 1 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vztq54byw"/><path class="kic8axbqv"/><path class="acx2mjbnt"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:blood-donation-duotone-bold",
	});
}

export default Component;
