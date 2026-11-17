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
		"content": `<style>.nhzmy4bby {
  fill: currentColor;
  d: path("M18.373 7.247A1.001 1.001 0 0 1 17.714 9H9v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM20 12a1 1 0 0 1 0 2v1.586l1.707 1.707A1 1 0 0 1 21 19h-3v2a1 1 0 0 1-2 0v-2h-3a1.002 1.002 0 0 1-.707-1.707L14 15.586V14a1 1 0 0 1 0-2Z");
}
</style><path class="nhzmy4bby"/>`,
		"fallback": "coolicons:house-pin-corner-fill-sharp",
	});
}

export default Component;
