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
		"content": `<style>.pfbdq0bib {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-7.384h14V5H5z");
}
</style><path class="pfbdq0bib"/>`,
		"fallback": "material-symbols-light:bottom-sheets-sharp",
	});
}

export default Component;
