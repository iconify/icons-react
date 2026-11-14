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
		"content": `<style>.mycvdnbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16M8.5 8.5L5 12l3.5 3.5m7-7L19 12l-3.5 3.5");
}
</style><path class="mycvdnbso"/>`,
		"fallback": "uix-sharp:expand-horizontal",
	});
}

export default Component;
