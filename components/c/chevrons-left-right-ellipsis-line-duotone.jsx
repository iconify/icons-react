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
		"content": `<style>.c9l59msix {
  d: path("M8 12H8.009M11.991 12H12M15.991 12H16");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oorbizavx {
  d: path("M8 6L2 12L8 18");
}

.th_2vrbuv {
  d: path("M16 6L22 12L16 18");
}
</style><g class="hntgybcog"><path class="th_2vrbuv"/><path class="oorbizavx"/><path class="c9l59msix"/></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-line-duotone",
	});
}

export default Component;
