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
		"content": `<style>.elxxx9bkr {
  fill: currentColor;
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM12 12.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 14l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 15.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 14l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="elxxx9bkr"/>`,
		"fallback": "coolicons:house-close-fill-sharp",
	});
}

export default Component;
