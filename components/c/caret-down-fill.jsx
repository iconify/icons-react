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
		"content": `<style>.oimxsbabk {
  fill: currentColor;
  d: path("M16 9a1.002 1.002 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8 9Z");
}
</style><path class="oimxsbabk"/>`,
		"fallback": "coolicons:caret-down-fill",
	});
}

export default Component;
