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
		"content": `<style>.nrvukhb2y {
  d: path("M16.5 4.206A9 9 0 1 1 12 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wauk053bg {
  d: path("M12 7.5V12l3 1.5");
}
</style><g class="ulnmmdpxh"><path class="nrvukhb2y"/><path class="wauk053bg"/></g>`,
		"fallback": "uix-sharp:ai-history",
	});
}

export default Component;
