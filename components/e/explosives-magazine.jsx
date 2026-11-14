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
		"content": `<style>.c7j15pa5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8h5.5v13.5h-5.5Zm5.5-2.5h5.5v16h-5.5Zm5.5 2.5h5.5v13.5h-5.5Zm-11 7h16.5M12 5.5c0-1.75 1.5-1.5 2.25-3");
}
</style><path class="c7j15pa5c"/>`,
		"fallback": "uix-sharp:explosives-magazine",
	});
}

export default Component;
