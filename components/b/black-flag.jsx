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
		"content": `<style>.hh633abth {
  d: path("M12 13.5v5m-3.5 3l3.5-3l3.5 3");
}

.l4a0e8cji {
  fill: currentColor;
  d: path("M7.5 2.5h9v11h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4a0e8cji"/><path class="hh633abth"/></g>`,
		"fallback": "uix-sharp:black-flag",
	});
}

export default Component;
