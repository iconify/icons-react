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
		"content": `<style>.ve09ffb2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19v3h-19Zm2 3v6h15v-6M8 9.5a4 4 0 0 1 8 0m-9.5 0h11M12 3v2.5");
}
</style><path class="ve09ffb2d"/>`,
		"fallback": "uix-sharp:customer-service-desk",
	});
}

export default Component;
