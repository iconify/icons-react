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
		"content": `<style>.c2dbjydhq {
  d: path("M12 12.5a2.5 2.5 0 0 1 0 5m-5 1L5.5 20M17 18.5l1.5 1.5");
}

.txuf6ibwi {
  d: path("M12 2.5V7m-7 8c0-5 3-8 7-8s7 3 7 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txuf6ibwi"/><path class="c2dbjydhq"/></g>`,
		"fallback": "uix-sharp:ceiling-light",
	});
}

export default Component;
