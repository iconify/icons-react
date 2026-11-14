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
		"content": `<style>.d8c6huevd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20.5H3V9h4.5V2.5h9v9.7m-6-5.7h.01m2.99 0h.01m-3.01 4h.01m2.99 0h.01M18 15v6m-3-3h6");
}
</style><path class="d8c6huevd"/>`,
		"fallback": "uix-sharp:incorporation",
	});
}

export default Component;
