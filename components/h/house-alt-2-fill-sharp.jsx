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
		"content": `<style>.a7pctvthv {
  fill: currentColor;
  d: path("m12.659 2.247l8 7c.217.19.341.465.341.753v10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0M14 17a2 2 0 1 0-4 0v3h4Z");
}
</style><path class="a7pctvthv"/>`,
		"fallback": "coolicons:house-alt-2-fill-sharp",
	});
}

export default Component;
