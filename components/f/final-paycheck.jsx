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
		"content": `<style>.le72v5b1z {
  d: path("M3 21.5V3h11v10.3");
}

.ofj401brk {
  d: path("m3 3l4 2v14.5l-4 2Zm6.75 12.75h1.5m-1.5 3h1.5m3-.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25-.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="le72v5b1z"/><path class="ofj401brk"/></g>`,
		"fallback": "uix-sharp:final-paycheck",
	});
}

export default Component;
