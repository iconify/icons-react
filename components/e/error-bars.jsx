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
		"content": `<style>.je4z8bbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h18M7 20v-8.5h10V20M12 4v12.5M10 4h4m-4 12.5h4");
}
</style><path class="je4z8bbry"/>`,
		"fallback": "uix-sharp:error-bars",
	});
}

export default Component;
