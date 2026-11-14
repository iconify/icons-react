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
		"content": `<style>.q8a2ciu9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h10v10H3Zm13.5 1h.01m-.01 4h.01m-.01 4h.01m3.99-6h.01m-.01 4h.01");
}
</style><path class="q8a2ciu9n"/>`,
		"fallback": "uix-sharp:diffusion-model",
	});
}

export default Component;
