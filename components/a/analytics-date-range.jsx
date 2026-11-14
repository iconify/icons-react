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
		"content": `<style>.pn_isuw7a {
  d: path("M6.5 15.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0h5m0 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.qcw5wwb5t {
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qcw5wwb5t"/><path class="pn_isuw7a"/></g>`,
		"fallback": "uix-sharp:analytics-date-range",
	});
}

export default Component;
