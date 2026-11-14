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
		"content": `<style>.qs8d7tbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6v8.5m19-8.5v8m0-6.5h-3L14 5c-.6-.3-1.4-.25-2 .25L7.75 8c-.75.5-.75 1.5 0 2s1.5.5 2 0l1.75-1.5m-9-1h3l3-1.75m-6 7.75h2l5.25 4.75c.65.5 1.6.5 2.25-.25q.097.096.215.167M11.5 8.5l4.57 4.189M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="qs8d7tbnr"/>`,
		"fallback": "uix-sharp:account-escrow",
	});
}

export default Component;
