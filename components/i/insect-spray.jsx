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
		"content": `<style>.pne8sp5dv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5h9v11h-9Zm2.5 0V9a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v1.5m-3.75-6h3V8h-3Zm8.25-1l3.5-1m-3 3.75h4M16 9l3.5 1");
}
</style><path class="pne8sp5dv"/>`,
		"fallback": "uix-sharp:insect-spray",
	});
}

export default Component;
