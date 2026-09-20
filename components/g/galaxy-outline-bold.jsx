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
		"content": `<style>.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.od8m85avy {
  d: path("M12 12c0 -3 3 -5 6 -3s2 8 -3 10c-6 2 -11 -2 -11 -8 0 -5 5 -8 10 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="od8m85avy"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:galaxy-outline-bold",
	});
}

export default Component;
