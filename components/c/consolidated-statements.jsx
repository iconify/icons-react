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
		"content": `<style>.pf8ez5bvy {
  d: path("M8 6V5a2.5 2.5 0 0 1 2.5-2.5h7A2.5 2.5 0 0 1 20 5v10.5a2.5 2.5 0 0 1-2.5 2.5h-1m-9 0v-3m3 3v-5.5m3 5.5V9.5");
}

.pm1fwcczn {
  d: path("M4.5 6h12v15.5h-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pm1fwcczn"/><path class="pf8ez5bvy"/></g>`,
		"fallback": "uix-sharp:consolidated-statements",
	});
}

export default Component;
