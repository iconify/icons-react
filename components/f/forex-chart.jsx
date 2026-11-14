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
		"content": `<style>.aa2x8_bum {
  d: path("M3.5 3.5v17h17M8 8v9m4-11v9m4-5v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmmpk-o7v {
  d: path("M6.5 10h3v4h-3Zm4-2h3v4h-3Zm4 4h3v4h-3Z");
}
</style><g class="ulnmmdpxh"><path class="aa2x8_bum"/><path class="vmmpk-o7v"/></g>`,
		"fallback": "uix-sharp:forex-chart",
	});
}

export default Component;
