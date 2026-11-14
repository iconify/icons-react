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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcfvpf1cu {
  d: path("M2.5 8.5L12 3l9.5 5.5Zm0 12h10M6 8.5v9m4.5-9v9m4.5-9v4.2m4-4.2V12m-4.25 6a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="wcfvpf1cu"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:courthouse-clock",
	});
}

export default Component;
