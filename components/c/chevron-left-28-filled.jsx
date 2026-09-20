import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aj8x3w-0n {
  fill: currentColor;
  d: path("M18.457 23.207a1 1 0 0 1-1.414 0l-8.75-8.75a1 1 0 0 1 0-1.414l8.75-8.75a1 1 0 1 1 1.414 1.414l-8.043 8.043l8.043 8.043a1 1 0 0 1 0 1.414");
}
</style><path class="aj8x3w-0n"/>`,
		"fallback": "fluent:chevron-left-28-filled",
	});
}

export default Component;
