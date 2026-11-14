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
		"content": `<style>.rl3r2gbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17v8a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 19Zm8.5 0V3.5m-3 0h6M7 11L5 4.5M17 11l2-6.5");
}
</style><path class="rl3r2gbto"/>`,
		"fallback": "uix-sharp:art-caddy",
	});
}

export default Component;
