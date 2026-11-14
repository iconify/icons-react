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
		"content": `<style>.fbv6vbbeb {
  d: path("M12 7.5a3.5 3.5 0 0 1 0 7m4.5 1l3 3m-12-3l-3 3m7.5-1.25v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qj7ya3bni {
  d: path("M6.5 11h11a2.5 2.5 0 0 0 0-5a4 4 0 0 0-7.5.5A3 3 0 0 0 6.5 11");
}
</style><g class="hntgybcog"><path class="qj7ya3bni"/><path class="fbv6vbbeb"/></g>`,
		"fallback": "uix:crepuscular-rays",
	});
}

export default Component;
