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
		"content": `<style>.j7i8zmiam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 18.5l2.75-15h1.5l2.75 15Zm-2 2h11M6 9h4m-5 5h6m5.5-11h4v13.5l-2 4l-2-4Zm0 3h4m-4 10.5h4");
}
</style><path class="j7i8zmiam"/>`,
		"fallback": "uix-sharp:incident-report",
	});
}

export default Component;
