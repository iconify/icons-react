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
		"content": `<style>.pc3smu8-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19v13h-19Zm4.5 0v2m0 3v3m0 3v2m3-9h5m-5 5h3.5m3 0h2");
}
</style><path class="pc3smu8-p"/>`,
		"fallback": "uix-sharp:cheque-leaf",
	});
}

export default Component;
