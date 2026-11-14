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
		"content": `<style>.uhyaxbbct {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM18 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="uhyaxbbct"/>`,
		"fallback": "uix-sharp:chart-punch-card",
	});
}

export default Component;
