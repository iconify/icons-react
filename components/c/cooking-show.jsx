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
		"content": `<style>.hy1de4b2q {
  d: path("M6 12h12M7.5 12v3.5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wknjzkbcl {
  d: path("M2.5 8h19v13.5h-19ZM8 3l4 5l4-5");
}
</style><g class="ulnmmdpxh"><path class="wknjzkbcl"/><path class="hy1de4b2q"/></g>`,
		"fallback": "uix-sharp:cooking-show",
	});
}

export default Component;
