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
		"content": `<style>.jm57nr2pr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14l-3 4.25l3 4H5Zm0-1v18m13-6l.882 1.786l1.971.287l-1.426 1.391l.336 1.963L18 19.5l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287Z");
}
</style><path class="jm57nr2pr"/>`,
		"fallback": "uix-sharp:flag-star",
	});
}

export default Component;
