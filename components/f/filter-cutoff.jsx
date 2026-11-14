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
		"content": `<style>.km141lb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H12c3.5 0 5 2.5 9.5 10M12 2.5V5m0 2.75v2.5M12 13v2.5m0 2.75v2.5");
}
</style><path class="km141lb6q"/>`,
		"fallback": "uix-sharp:filter-cutoff",
	});
}

export default Component;
