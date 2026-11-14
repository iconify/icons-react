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
		"content": `<style>.y8q278ode {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.1-4.75 4.75-4.75S12 17.25 12 20c0 .6-.4 1-1 1H3.5c-.6 0-1-.4-1-1ZM4.25 7.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9.75 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1 7.75h6m-6 2.75h6M15 21h4");
}
</style><path class="y8q278ode"/>`,
		"fallback": "uix-sharp:friend-list",
	});
}

export default Component;
