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
		"content": `<style>.kjq9vfblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 15.5H2.5v-12h19v9.8m-15-3.8h.01m3.49 0h7.5m-3 6.5a1 1 0 0 1 1-1h1.75l1 1h2.25a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1Z");
}
</style><path class="kjq9vfblu"/>`,
		"fallback": "uix-sharp:file-server",
	});
}

export default Component;
