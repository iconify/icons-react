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
		"content": `<style>.yf080gb3g {
  fill: currentColor;
  d: path("m60.9 194l-9.46 16a4 4 0 1 1-6.88-4L54 190a4 4 0 0 1 6.9 4M232 156h-50.08L150 102a4 4 0 1 0-6.89 4.07L204.56 210a4 4 0 1 0 6.88-4.07l-24.79-42H232a4 4 0 0 0 0-8Zm-89.53 0h-59.1l72.07-122a4 4 0 1 0-6.88-4L128 64.75L107.44 30a4 4 0 1 0-6.88 4l22.79 38.58L74.08 156H24a4 4 0 0 0 0 8h118.47a4 4 0 1 0 0-8");
}
</style><path class="yf080gb3g"/>`,
		"fallback": "ph:app-store-logo-thin",
	});
}

export default Component;
