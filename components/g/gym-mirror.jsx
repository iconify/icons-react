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
		"content": `<style>.om_ecdb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5V8a5 5 0 0 1 10 0v6.5Zm2.75-4L13 7.25m-6.5 10H9v4.5H6.5Zm8.5 0h2.5v4.5H15ZM9 19.5h6");
}
</style><path class="om_ecdb-y"/>`,
		"fallback": "uix-sharp:gym-mirror",
	});
}

export default Component;
