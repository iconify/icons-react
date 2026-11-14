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
		"content": `<style>.ccb46tbsv {
  d: path("m12 2.5l7.5 2.75V11c0 4.5-3 8-7.5 10.5c-4.5-2.5-7.5-6-7.5-10.5V5.25Z");
}

.dkvdnlczs {
  d: path("m8.5 11.75l2.5 2.5l4.75-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ccb46tbsv"/><path class="dkvdnlczs"/></g>`,
		"fallback": "uix-sharp:crash-free",
	});
}

export default Component;
