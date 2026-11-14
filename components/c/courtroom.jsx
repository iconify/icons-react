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
		"content": `<style>.patob845m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.232 3.197l7.071 7.071l-3.535 3.535l-7.071-7.071Zm.018 7.053L4 18.5m8.5-1h8v3h-8Z");
}
</style><path class="patob845m"/>`,
		"fallback": "uix-sharp:courtroom",
	});
}

export default Component;
