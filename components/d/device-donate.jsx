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
		"content": `<style>.e32hkxxew {
  d: path("M14.6 21.5H4.5v-19h12v10.1M9 18h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w629tr23n {
  d: path("M18.25 21.25L15.5 18.5a2 2 0 0 1 2.75-2.75A2 2 0 0 1 21 18.5Z");
}
</style><g class="ulnmmdpxh"><path class="e32hkxxew"/><path class="w629tr23n"/></g>`,
		"fallback": "uix-sharp:device-donate",
	});
}

export default Component;
