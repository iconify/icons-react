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
		"content": `<style>.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.uxd_xs46t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.68 5.3l7.64 11.9l.68 1.05l-1.07.64l-.36.22l-1.07.64l-.73-1.01l-5.04-6.98l-.73-1.01l-.73 1.01l-5.04 6.98l-.73 1.01l-1.07-.64l-.36-.22L3 18.25l.68-1.05l7.64-11.9l.68-1.05z");
}

.yzncb0r_t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7 15.5h.01m10.59 0h.01M12 7.75h.01");
}
</style><g class="ux2u0rbkq"><path class="uxd_xs46t"/><path class="yzncb0r_t"/></g>`,
		"fallback": "iconoven:boomerang-sharp",
	});
}

export default Component;
