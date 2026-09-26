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
		"content": `<style>.ch2api_-x {
  fill: currentColor;
  d: path("M4 1L20 1C20.5523 1 21 1.4477 21 2L21 22C21 22.7247 20.2533 23.2087 19.5918 22.9129L12 19.5177L4.4082 22.9129C3.7467 23.2087 3 22.7247 3 22L3 2C3 1.4477 3.4477 1 4 1Z");
}
</style><path class="ch2api_-x"/>`,
		"fallback": "keyline-icons:bookmark-sharp-fill",
	});
}

export default Component;
