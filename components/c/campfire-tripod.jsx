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
		"content": `<style>.cnn36acdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3L3.25 21.25M12 3l8.75 18.25M12 3v9m-2.25 0h4.5v1.5a2.25 2.25 0 0 1-4.5 0ZM12 18.5c2 1.25 2 3 0 3s-2-1.75 0-3Z");
}
</style><path class="cnn36acdz"/>`,
		"fallback": "uix-sharp:campfire-tripod",
	});
}

export default Component;
