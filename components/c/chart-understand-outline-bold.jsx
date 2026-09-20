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
		"content": `<style>.hqoi59sxr {
  d: path("M12 9v7");
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s97n4nb-h {
  d: path("M8 11v5");
}

.z9nuhdbuz {
  d: path("M16 13v3");
}
</style><g class="s0phu2bbs"><path class="o72p0hsyz"/><path class="s97n4nb-h"/><path class="hqoi59sxr"/><path class="z9nuhdbuz"/></g>`,
		"fallback": "iconmind:chart-understand-outline-bold",
	});
}

export default Component;
