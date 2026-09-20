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
		"content": `<style>.am8l84brn {
  fill: currentColor;
  d: path("M11 1.1L13.9 4H18v4.1l2.9 2.9l-2.9 2.9l2.875 5.65l-1.325 1.325L13.9 18L11 20.9L8.1 18H4v-4.1L1.1 11L4 8.1V4h4.1z");
}
</style><path class="am8l84brn"/>`,
		"fallback": "material-symbols:comic-bubble-sharp",
	});
}

export default Component;
