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
		"content": `<style>.glxltwbbg {
  d: path("M8.75 12.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 0l1.5-1.5M12 18.5v3");
}

.siezgw1iu {
  d: path("M3 2.5h18v16H3Zm0 4h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="siezgw1iu"/><path class="glxltwbbg"/></g>`,
		"fallback": "uix-sharp:gas-meter-box",
	});
}

export default Component;
