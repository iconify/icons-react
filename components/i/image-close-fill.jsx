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
		"content": `<style>.a0yqn2hzu {
  fill: currentColor;
  d: path("m17.414 22l-8.707-8.707a2.414 2.414 0 0 0-3.414 0L2 16.586V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3Zm-1-13l1.293-1.293a.999.999 0 1 0-1.414-1.414L15 7.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L13.586 9l-1.293 1.293a.999.999 0 1 0 1.414 1.414L15 10.414l1.293 1.293a.999.999 0 1 0 1.414-1.414ZM3 18.414l3.707-3.707a.414.414 0 0 1 .586 0L14.586 22H5a3 3 0 0 1-2.975-2.611Z");
}
</style><path class="a0yqn2hzu"/>`,
		"fallback": "coolicons:image-close-fill",
	});
}

export default Component;
