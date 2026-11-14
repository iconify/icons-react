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
		"content": `<style>.udv4ywizw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h9v15h-9ZM13.2 21H2.5v-3.5h10.7M10 10h.01M16 15h3.5a2 2 0 1 0-2-2M16 18.5h3.5A1.5 1.5 0 1 1 18 20");
}
</style><path class="udv4ywizw"/>`,
		"fallback": "uix-sharp:draught-proofing",
	});
}

export default Component;
