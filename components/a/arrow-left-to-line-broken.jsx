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
		"content": `<style>.bjr4uf7pk {
  d: path("M3 4L3 8M3 12L3 20");
}

.eoe13w36s {
  d: path("M21 12L8 12M12.375 16L8 12L12.375 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eoe13w36s"/><path class="bjr4uf7pk"/></g>`,
		"fallback": "solar:arrow-left-to-line-broken",
	});
}

export default Component;
