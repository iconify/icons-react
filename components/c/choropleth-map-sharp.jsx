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
		"content": `<style>.ykp8rsu-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.99 3.81l5.77-.87L11 2.75l-.15 1.24l-.7 5.77L10 11l-1.22.25l-4.81 1l-1.22.25V4zm10.46-.72l5.6 1.57l1.2.34l-.19 1.24l-.87 5.52L20 13l-1.24-.16l-5.27-.68l-1.24-.16l.13-1.24l.74-6.77l.13-1.24zM3.99 14.85l5.77-.7L11 14l1.23.21l6.29 1.08l1.23.21l-.54 1.13l-1.67 3.49l-.54 1.13l-1.25-.07l-10.5-.61L4 20.5l-.28-1.22l-.69-3.06L2.75 15z");
}
</style><path class="ykp8rsu-i"/>`,
		"fallback": "iconoven:choropleth-map-sharp",
	});
}

export default Component;
