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
		"content": `<style>.yog-m-h7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l7.5 2.75V11c0 5-3.25 8.75-7.5 10.5C7.75 19.75 4.5 16 4.5 11V5.25ZM12 7v9M8.25 9.25l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="yog-m-h7e"/>`,
		"fallback": "uix-sharp:frost-protection",
	});
}

export default Component;
