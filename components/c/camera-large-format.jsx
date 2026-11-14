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
		"content": `<style>.mog8djbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h4v13h-4Zm15 2.5h4v8h-4Zm-15 14h19M6.5 5.75l11 2.75m-11 7.75l11-2.75M12 7.25v7.5");
}
</style><path class="mog8djbop"/>`,
		"fallback": "uix-sharp:camera-large-format",
	});
}

export default Component;
