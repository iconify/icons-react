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
		"content": `<style>.iozeegaff {
  d: path("m9 16l2 2l4-4");
}

.rzdrhw8yd {
  d: path("m7 2.5l5 3l5-3m-7 3h4v3h-4Zm-4 3h12v13H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rzdrhw8yd"/><path class="iozeegaff"/></g>`,
		"fallback": "uix-sharp:auditor-badge",
	});
}

export default Component;
