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
		"content": `<style>.cpmzr29ux {
  d: path("m16 8 4 4 -4 4 -4 -4Z");
}

.d223d_x9q {
  d: path("M3 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uhawluh-v {
  d: path("M6.5 9.5 9 12l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="d223d_x9q"/><path class="uhawluh-v"/><path class="cpmzr29ux"/></g>`,
		"fallback": "iconmind:encoder-only-outline-bold",
	});
}

export default Component;
