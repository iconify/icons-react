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
		"content": `<style>.e212ajb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19M5 6v13m7-13v13h8.5V6M12 11.5h8.5m-5.75-2.75h3");
}
</style><path class="e212ajb-o"/>`,
		"fallback": "uix-sharp:desk",
	});
}

export default Component;
