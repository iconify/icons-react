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
		"content": `<style>.lo970fxfb {
  d: path("M8 21.5V17h3v4.5M7 7h.01M12 7h.01M7 11.5h.01m4.99 0h.01m6.99 3V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbfivcc8o {
  d: path("M3 2.5h13v19H3Z");
}
</style><g class="ulnmmdpxh"><path class="wbfivcc8o"/><path class="lo970fxfb"/></g>`,
		"fallback": "uix-sharp:account-at-risk",
	});
}

export default Component;
