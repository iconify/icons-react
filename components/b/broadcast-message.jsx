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
		"content": `<style>.djqrb9b4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h4l10-5v16L9 15H5Zm5.5 6.75l1 4.25");
}
</style><path class="djqrb9b4e"/>`,
		"fallback": "uix-sharp:broadcast-message",
	});
}

export default Component;
