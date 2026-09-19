import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rf31_lbll {
  fill: currentColor;
  d: path("M7 8h48v48H7z");
}
</style><path class="rf31_lbll"/>`,
		"fallback": "emojione-monotone:black-medium-square",
	});
}

export default Component;
