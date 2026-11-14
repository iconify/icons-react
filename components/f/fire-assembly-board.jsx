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
		"content": `<style>.qmsr1mb9y {
  d: path("M3 2.5h18V16H3ZM12 16v5.5m-3.5 0h7");
}

.qx-347bal {
  d: path("M12 5.5c2.25 2 3 3.5 3 4.75a3 3 0 0 1-6 0C9 9 9.75 7.5 12 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qmsr1mb9y"/><path class="qx-347bal"/></g>`,
		"fallback": "uix-sharp:fire-assembly-board",
	});
}

export default Component;
