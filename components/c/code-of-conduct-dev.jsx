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
		"content": `<style>.bkoaooaqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 19H3V2.5h13v9.3M6.5 7h6m-3.25 4h3.25m-6 4H10m8.25 6.25l-3-3a2.125 2.125 0 0 1 3-3a2.125 2.125 0 0 1 3 3Z");
}
</style><path class="bkoaooaqv"/>`,
		"fallback": "uix-sharp:code-of-conduct-dev",
	});
}

export default Component;
