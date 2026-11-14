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
		"content": `<style>.r7oarxwcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10.5h4v11h-4Zm-4 11h12m-6-19c3.5 2.5 3 5 0 5s-3.5-2.5 0-5Z");
}
</style><path class="r7oarxwcy"/>`,
		"fallback": "uix-sharp:flare-stack",
	});
}

export default Component;
