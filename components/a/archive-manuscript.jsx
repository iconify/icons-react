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
		"content": `<style>.f731vsbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v4h-17Zm0 15h17v4h-17ZM6 6.5v11m12-11v11M9 10h6m-6 4h4.5");
}
</style><path class="f731vsbry"/>`,
		"fallback": "uix-sharp:archive-manuscript",
	});
}

export default Component;
