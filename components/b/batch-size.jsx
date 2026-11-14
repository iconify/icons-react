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
		"content": `<style>.gcdyhebco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.75h12V7H3ZM3 10h12v4.25H3Zm0 7.25h12v4.25H3Zm15.5-14.5h2V21.5h-2");
}
</style><path class="gcdyhebco"/>`,
		"fallback": "uix-sharp:batch-size",
	});
}

export default Component;
