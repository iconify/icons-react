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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbgv8j17j {
  d: path("M5.5 8.5h5V15h-5Zm8 .5h5m-5 3h5m-5 3h3");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="vbgv8j17j"/></g>`,
		"fallback": "uix-sharp:exam-admit-card",
	});
}

export default Component;
