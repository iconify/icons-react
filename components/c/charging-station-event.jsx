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

.kupkpf_fy {
  d: path("m11.42 8.282l-1.995 2.882a.851.851 0 0 0 .7 1.336a1.418 1.418 0 0 1 1.405 1.61l-.155 1.14a.665.665 0 0 0 1.205.468l1.995-2.882a.851.851 0 0 0-.7-1.336a1.418 1.418 0 0 1-1.405-1.61l.155-1.14a.665.665 0 0 0-1.205-.468");
}

.rfenysb5q {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5");
}
</style><g class="hntgybcog"><path class="rfenysb5q"/><path class="kupkpf_fy"/></g>`,
		"fallback": "uix:charging-station-event",
	});
}

export default Component;
