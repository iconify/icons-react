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
		"content": `<style>.nugbvbbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5v-4m3 7h4m-10 0H5m9.25-2.25l1.5-1.5m-6 1.5l-1.5-1.5m6 6l1.5 1.5m-6-1.5l-1.5 1.5M12 21.5v-6m5.75-11.75h.01m-11.51 0h.01m11.49 11.5h.01m-11.51 0h.01");
}
</style><path class="nugbvbbiv"/>`,
		"fallback": "uix-sharp:fireworks-show",
	});
}

export default Component;
