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
		"content": `<style>.l16nvsktw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5-7V4M5 9.25h1.75m10.5 0H19m-12-5L8.25 5.5M17 4.25L15.75 5.5M12 21.5V15m0 0c-2.5-.5-4.5 1-4.75 4.5c2.25-.75 4-2.5 4.75-4.5Zm0 0c2.5-.5 4.5 1 4.75 4.5c-2.25-.75-4-2.5-4.75-4.5Z");
}
</style><path class="l16nvsktw"/>`,
		"fallback": "uix-sharp:heat-stress",
	});
}

export default Component;
