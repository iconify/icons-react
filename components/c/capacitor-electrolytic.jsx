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
		"content": `<style>.lf31zhbpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12V15H6ZM9 15v6.5m6-6.5v6.5m-6.5-15V12");
}
</style><path class="lf31zhbpm"/>`,
		"fallback": "uix-sharp:capacitor-electrolytic",
	});
}

export default Component;
