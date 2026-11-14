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
		"content": `<style>.rmhb5yt8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h2.5a8.5 8.5 0 0 1 0 17H10ZM10 9H2.5v6H10");
}
</style><path class="rmhb5yt8h"/>`,
		"fallback": "uix-sharp:d-ring",
	});
}

export default Component;
