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
		"content": `<style>.gc86-obkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9V2.75m-3 3l3-3l3 3M12 15v6.25m-3-3l3 3l3-3M4 12h16");
}
</style><path class="gc86-obkw"/>`,
		"fallback": "uix-sharp:arrows-up-down-from-line",
	});
}

export default Component;
