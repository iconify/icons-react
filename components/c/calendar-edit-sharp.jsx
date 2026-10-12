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
		"content": `<style>.k2o1pzbfb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 20.75v-1.9l4.3-4.3a1.3 1.3 0 0 1 1.85 1.85l-4.3 4.35Z");
}

.lqt5w6d4w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 14h.01M12 14h.01M8 17h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.waa338bte {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 20.25h-8v-15h16.5v6.5M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5");
}
</style><g class="ux2u0rbkq"><path class="waa338bte"/><path class="lqt5w6d4w"/><path class="k2o1pzbfb"/></g>`,
		"fallback": "iconoven:calendar-edit-sharp",
	});
}

export default Component;
