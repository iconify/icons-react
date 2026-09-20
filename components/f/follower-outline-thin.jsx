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
		"content": `<style>.h9o82-b1h {
  d: path("M15 16a3 3 0 0 1 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oumlmtbql {
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.x3jvrbc_p {
  d: path("M5 17a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="ppbx_abyw"/><path class="x3jvrbc_p"/><path class="oumlmtbql"/><path class="h9o82-b1h"/></g>`,
		"fallback": "iconmind:follower-outline-thin",
	});
}

export default Component;
