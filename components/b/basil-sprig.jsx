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
		"content": `<style>.e0oi02vvl {
  d: path("M12 21V9m0 5c-3.5 0-6-2-6-5.5c3.5 0 6 2 6 5.5Zm0-2c3.5 0 6-2 6-5.5c-3.5 0-6 2-6 5.5Z");
}

.rocqyfbcb {
  d: path("M12 9c-2-1.5-2-4 0-5.5c2 1.5 2 4 0 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e0oi02vvl"/><path class="rocqyfbcb"/></g>`,
		"fallback": "uix-sharp:basil-sprig",
	});
}

export default Component;
