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
		"content": `<style>.juumo6b7d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.25h16.5v15H3.75zm0 4.75h16.5");
}

.kcpgugr3j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 13.5h.01m3.99 0h.01m3.99 0h.01M8 17h.01M12 17h.01M16 17h.01");
}

.kot_bbcsf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.75v4.5m8-4.5v4.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="juumo6b7d"/><path class="kcpgugr3j"/><path class="kot_bbcsf"/></g>`,
		"fallback": "iconoven:calendar-days-sharp",
	});
}

export default Component;
