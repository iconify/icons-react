import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l0jun7rnu {
  fill: currentColor;
  d: path("m202.83 218.83l-24 24a4 4 0 0 1-5.66-5.66L190.34 220H80a20 20 0 0 1-20-20v-96a4 4 0 0 1 8 0v96a12 12 0 0 0 12 12h110.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66M80 68a4 4 0 0 0 2.83-6.83L65.66 44H176a12 12 0 0 1 12 12v96a4 4 0 0 0 8 0V56a20 20 0 0 0-20-20H65.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24A4 4 0 0 0 80 68");
}
</style><path class="l0jun7rnu"/>`,
		"fallback": "ph:device-rotate-thin",
	});
}

export default Component;
