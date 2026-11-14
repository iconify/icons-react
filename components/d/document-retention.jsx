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
		"content": `<style>.z76qhbb6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.5-3.5h5m-4.5 8h4");
}
</style><path class="z76qhbb6s"/>`,
		"fallback": "uix:document-retention",
	});
}

export default Component;
