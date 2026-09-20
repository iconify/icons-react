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
		"content": `<style>.pa6ncgweb {
  fill: currentColor;
  d: path("M4.293 9.293a1 1 0 0 1 1.414 0L14 17.586l8.293-8.293a1 1 0 1 1 1.414 1.414l-9 9a1 1 0 0 1-1.414 0l-9-9a1 1 0 0 1 0-1.414");
}
</style><path class="pa6ncgweb"/>`,
		"fallback": "fluent:chevron-down-28-filled",
	});
}

export default Component;
