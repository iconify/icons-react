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
		"content": `<style>.meinyobsi {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077z");
}
</style><path class="meinyobsi"/>`,
		"fallback": "material-symbols-light:chat-bubble-sharp",
	});
}

export default Component;
