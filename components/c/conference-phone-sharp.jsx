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
		"content": `<style>.af7y75b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 5.25a7 7 0 0 1 10.5 0M9.25 8L12 5.396L14.75 8m-12 8.5c0-3.5 4.15-6 9.25-6s9.25 2.5 9.25 6v3.25H2.75v-2Zm4.5-.5h9.5");
}
</style><path class="af7y75b0e"/>`,
		"fallback": "iconoven:conference-phone-sharp",
	});
}

export default Component;
