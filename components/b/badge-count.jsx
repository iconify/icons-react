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

.vxyakx64c {
  d: path("m8 10.5l1.5-1.25v5.5M15 9.5v5M12.5 12h5");
}

.z7wgppb5j {
  d: path("M7.5 7h9a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5a5 5 0 0 1 5-5");
}
</style><g class="hntgybcog"><path class="z7wgppb5j"/><path class="vxyakx64c"/></g>`,
		"fallback": "uix:badge-count",
	});
}

export default Component;
