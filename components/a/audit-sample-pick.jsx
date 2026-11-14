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
		"content": `<style>.d6iv-3bkh {
  d: path("M3 3h7.5v7.5H3Zm10.5 0H21v7.5h-7.5ZM3 13.5h7.5V21H3Zm10.5 0H21V21h-7.5Z");
}

.p8dwfybut {
  d: path("m5 6.75l1.5 1.5L8.75 5.5m6.75 11.75l1.5 1.5L19.25 16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d6iv-3bkh"/><path class="p8dwfybut"/></g>`,
		"fallback": "uix-sharp:audit-sample-pick",
	});
}

export default Component;
