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
		"content": `<style>.sbvtjt3oi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6.5h12v15H6Zm1-4h10v4H7ZM9 11h6m-6 3.25h6M9 17.5h4");
}
</style><path class="sbvtjt3oi"/>`,
		"fallback": "uix-sharp:dosage-instructions",
	});
}

export default Component;
