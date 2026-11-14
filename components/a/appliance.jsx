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
		"content": `<style>.ops4c2bme {
  d: path("M3 3h18v18H3Zm0 5h18M7 5.5h.01m3.49 0h.01");
}

.txi-p40ne {
  d: path("M7 11.5h10v6H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ops4c2bme"/><path class="txi-p40ne"/></g>`,
		"fallback": "uix-sharp:appliance",
	});
}

export default Component;
