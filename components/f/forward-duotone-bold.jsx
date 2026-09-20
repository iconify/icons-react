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
		"content": `<style>.dt4etiklt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 4 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f8wj1yoym {
  d: path("M21 9H7v11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1ev1ubdz {
  d: path("m16 4 5 5 -5 5");
}

.s9td7eb6f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 9H7v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="dt4etiklt"/><path class="s9td7eb6f"/><path class="s1ev1ubdz"/><path class="f8wj1yoym"/></g>`,
		"fallback": "iconmind:forward-duotone-bold",
	});
}

export default Component;
