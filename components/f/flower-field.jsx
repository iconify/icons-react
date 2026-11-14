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
		"content": `<style>.j74fs5b2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M12.75 5.25a1 1 0 1 1 .5 1.5A1 1 0 1 1 12 7.5a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0ZM12 7.5V20m-5.75-8a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0Zm-.75 2.25V20m13.75-9.5a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0Zm-.75 2.25V20");
}
</style><path class="j74fs5b2p"/>`,
		"fallback": "uix-sharp:flower-field",
	});
}

export default Component;
