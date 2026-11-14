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
		"content": `<style>.pggjzrb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 17C3.69 9.94 7.81 5.81 15 5.75C14.94 12.94 10.81 17.06 3.75 17ZM2.5 18.25L3.75 17m0 0L10 11m10-6v8.5m0 4.5h.01");
}
</style><path class="pggjzrb5q"/>`,
		"fallback": "uix-sharp:disease-alert",
	});
}

export default Component;
