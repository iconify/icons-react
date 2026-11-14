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
		"content": `<style>.xip9g9qcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H13v9H2.5Zm6.5 0v9m12.5-10L16 12l5.5 5.5");
}
</style><path class="xip9g9qcz"/>`,
		"fallback": "uix-sharp:focal-length",
	});
}

export default Component;
