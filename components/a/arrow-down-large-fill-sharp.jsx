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
		"content": `<style>.qx-73pble {
  fill: currentColor;
  d: path("m11.293 21.707l-6-6a.999.999 0 1 1 1.414-1.414L11 18.586V3a1 1 0 0 1 2 0v15.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0");
}
</style><path class="qx-73pble"/>`,
		"fallback": "coolicons:arrow-down-large-fill-sharp",
	});
}

export default Component;
