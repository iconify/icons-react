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
		"content": `<style>.reb45tb8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.14 9.36l2.72-4.47l.39-.64l.32.68l2.11 4.39l.32.68H4.75zm8.18-.04l2.11-4.39l.32-.68l.39.64l2.72 4.47l.39.64H13zM2.75 10h2M11 10h2m6.25 0h2m-16.5 3.5h14.5L19 14.75c-2.5.75-4.25 2.75-5 6.5h-4c-.75-3.75-2.5-5.75-5-6.5Z");
}
</style><path class="reb45tb8j"/>`,
		"fallback": "iconoven:bikini-sharp",
	});
}

export default Component;
