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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzpfazf1m {
  d: path("M20 3L16 3M12 3L4 3");
}

.urjv1kbgr {
  d: path("M12 21L12 8M8 12.375L12 8L16 12.375");
}
</style><g class="hntgybcog"><path class="urjv1kbgr"/><path class="mzpfazf1m"/></g>`,
		"fallback": "solar:arrow-up-to-line-broken",
	});
}

export default Component;
