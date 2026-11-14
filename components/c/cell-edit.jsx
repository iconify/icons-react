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
		"content": `<style>.fmqotzb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v19h-19Zm0 9.5h19M12 12v9.5M6 7.25h4m3.5-2.5v5m-1.25-5h2.5m-2.5 5h2.5");
}
</style><path class="fmqotzb2a"/>`,
		"fallback": "uix-sharp:cell-edit",
	});
}

export default Component;
