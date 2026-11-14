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
		"content": `<style>.ff0fr2b8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V8m18 11V8M5 11h6v4H5Zm8 0h6v4h-6ZM3 17h18");
}
</style><path class="ff0fr2b8v"/>`,
		"fallback": "uix-sharp:hotel-bed-twin",
	});
}

export default Component;
