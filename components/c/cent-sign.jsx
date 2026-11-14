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
		"content": `<style>.g5vrlkbxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.243 16.243a6 6 0 1 1 0-8.486M12.5 3.5v17");
}
</style><path class="g5vrlkbxs"/>`,
		"fallback": "uix-sharp:cent-sign",
	});
}

export default Component;
