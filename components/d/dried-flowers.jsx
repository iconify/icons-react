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
		"content": `<style>.nkfl_cc_n {
  d: path("M12 2.5V16m0-9l-5 7.5M12 7l5 7.5M10.25 9h3.5m-10 7.75a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0Zm6.5 2a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0Zm6.5-2a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0Z");
}

.r5au-nb0p {
  fill: currentColor;
  d: path("M12 2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r5au-nb0p"/><path class="nkfl_cc_n"/></g>`,
		"fallback": "uix-sharp:dried-flowers",
	});
}

export default Component;
