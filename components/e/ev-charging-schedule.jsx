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
		"content": `<style>.llwxwdb4k {
  d: path("M12.2 14H3.5V2.5h10v10.2M7 14v4a3 3 0 0 1-3 3H2.5");
}

.qgczy6c9q {
  d: path("M9.25 5.25L6.5 8.75h2l-.75 2.5l2.75-3.5h-2ZM15 15.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="llwxwdb4k"/><path class="qgczy6c9q"/></g>`,
		"fallback": "uix-sharp:ev-charging-schedule",
	});
}

export default Component;
