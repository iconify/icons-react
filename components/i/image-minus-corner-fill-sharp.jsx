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
		"content": `<style>.p703xuuca {
  fill: currentColor;
  d: path("M22 11a1 1 0 0 1-1 1h-9.586l-1.707-1.707a1 1 0 0 0-1.414 0L2 16.586V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Zm-7-1a2 2 0 1 0 .001-3.999A2 2 0 0 0 15 10m-6 2.414l2.707 2.707a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.676a1 1 0 0 0 .293-.203ZM15 16h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><path class="p703xuuca"/>`,
		"fallback": "coolicons:image-minus-corner-fill-sharp",
	});
}

export default Component;
