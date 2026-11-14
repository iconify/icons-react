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
		"content": `<style>.h-9pykbjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25V21.5m-1.75-17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 10a4.75 1.5 0 1 0 9.5 0a4.75 1.5 0 1 0-9.5 0Zm9.5 0a4.75 1.5 0 1 0 9.5 0a4.75 1.5 0 1 0-9.5 0Zm-8.5 5a4.25 1.5 0 1 0 8.5 0a4.25 1.5 0 1 0-8.5 0Zm8.5 0a4.25 1.5 0 1 0 8.5 0a4.25 1.5 0 1 0-8.5 0Z");
}
</style><path class="h-9pykbjs"/>`,
		"fallback": "uix-sharp:damselfly",
	});
}

export default Component;
