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
		"content": `<style>.nvm8veb8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14v11H5Zm-2.5 11h19M12 2v1.5m-4 11l-2.5 7m10.5-7l2.5 7m-6.5-7v7");
}
</style><path class="nvm8veb8t"/>`,
		"fallback": "uix-sharp:art-studio",
	});
}

export default Component;
