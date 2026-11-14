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
		"content": `<style>.bokcop__n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14H7v7.5H2.5Zm7.25-2.5h4.5v10h-4.5Zm7.25-2h4.5v12H17Zm-14.5 1L9 6l5.25 2l7.25-5.5m-19 8h.01m18.99-8h.01");
}
</style><path class="bokcop__n"/>`,
		"fallback": "uix-sharp:chart-combo",
	});
}

export default Component;
