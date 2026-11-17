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
		"content": `<style>.s5amsusjk {
  fill: currentColor;
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM13.8 9.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 14h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 12h-2Z");
}
</style><path class="s5amsusjk"/>`,
		"fallback": "coolicons:house-zap-fill-sharp",
	});
}

export default Component;
