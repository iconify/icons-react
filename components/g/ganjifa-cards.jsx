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
		"content": `<style>.er19h6phy {
  d: path("m15.5 11.5l2.5 3.13l-2.5 3.12l-2.5-3.12Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrk9lpb5f {
  width: 11px;
  height: 13.25px;
  x: 10px;
  y: 8px;
  rx: 2px;
}

.swodyng-r {
  d: path("M7 16H5a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V5");
}
</style><g class="hntgybcog"><path class="swodyng-r"/><rect class="hrk9lpb5f"/><path class="er19h6phy"/></g>`,
		"fallback": "iconoven:ganjifa-cards",
	});
}

export default Component;
