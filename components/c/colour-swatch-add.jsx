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
		"content": `<style>.zjrpcib8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 18H3V3h15v9.2M3 13h12.2m2.8 2v6m-3-3h6");
}
</style><path class="zjrpcib8e"/>`,
		"fallback": "uix-sharp:colour-swatch-add",
	});
}

export default Component;
