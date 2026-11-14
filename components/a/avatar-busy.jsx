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
		"content": `<style>.bj8xrnh3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.86 0 1.679.092 2.438.266M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm2 0h3");
}
</style><path class="bj8xrnh3o"/>`,
		"fallback": "uix-sharp:avatar-busy",
	});
}

export default Component;
