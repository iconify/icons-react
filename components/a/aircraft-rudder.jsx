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
		"content": `<style>.flpjlz-1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 16l7-13.5h4V16Zm8-13.5V16m4.75 3h6.25m-4.25-2l-2 2l2 2m2.25-4l2 2l-2 2");
}
</style><path class="flpjlz-1s"/>`,
		"fallback": "uix-sharp:aircraft-rudder",
	});
}

export default Component;
