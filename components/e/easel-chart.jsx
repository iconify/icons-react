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
		"content": `<style>.locbl7ofh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v12H3Zm5 12l-2.5 6.5M16 15l2.5 6.5M8 12V9.5m4 2.5V8m4 4V6");
}
</style><path class="locbl7ofh"/>`,
		"fallback": "uix-sharp:easel-chart",
	});
}

export default Component;
