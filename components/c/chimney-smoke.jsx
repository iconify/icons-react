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
		"content": `<style>.gm91qev_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 21.5l1.5-11h4l1.5 11ZM5 8.25h6v2.25H5ZM8.75 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 7a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 18 7Z");
}
</style><path class="gm91qev_e"/>`,
		"fallback": "uix-sharp:chimney-smoke",
	});
}

export default Component;
