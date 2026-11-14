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
		"content": `<style>.hddlzzbwx {
  d: path("M12.5 6L11 10.5l4.5-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ukmw0nbmi {
  d: path("M3 18.5V9a1.5 1.5 0 0 1 1.5-1.5H8l3 3l7 1.5a3.5 3.5 0 0 1 3.5 3.5v3Zm0-3h18.5");
}
</style><g class="hntgybcog"><path class="ukmw0nbmi"/><path class="hddlzzbwx"/></g>`,
		"fallback": "uix:deck-shoes",
	});
}

export default Component;
