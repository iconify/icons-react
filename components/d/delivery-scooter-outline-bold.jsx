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
		"content": `<style>.db6bvvb_j {
  d: path("M16 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.f6186achz {
  d: path("M15 8h4");
}

.olph5u3xh {
  d: path("m8 16 4 -4h5V8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skyc_tbew {
  d: path("M4 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="skyc_tbew"/><path class="db6bvvb_j"/><path class="olph5u3xh"/><path class="f6186achz"/></g>`,
		"fallback": "iconmind:delivery-scooter-outline-bold",
	});
}

export default Component;
