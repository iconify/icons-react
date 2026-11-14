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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwuabktpy {
  d: path("M2.5 2.5h16v5h-16ZM12.2 20H3V7.5h15v4.7m-7.5-.95v5M8 13.75h5m2 3.75h6v4h-6Z");
}
</style><g class="ulnmmdpxh"><path class="vwuabktpy"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:child-safe-cap",
	});
}

export default Component;
