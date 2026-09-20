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
		"content": `<style>.ndx-38ubh {
  fill: currentColor;
  d: path("M6.782 8.023C7.99 6.778 9.758 6 12 6h7a1 1 0 1 1 0 2h-7c-1.758 0-2.99.597-3.782 1.415C7.414 10.245 7 11.363 7 12.5s.414 2.256 1.218 3.085C9.01 16.403 10.242 17 12 17h7.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 19H12c-2.242 0-4.01-.778-5.218-2.023C5.586 15.744 5 14.113 5 12.5s.586-3.244 1.782-4.477");
}
</style><path class="ndx-38ubh"/>`,
		"fallback": "fluent:arrow-hook-down-right-28-filled",
	});
}

export default Component;
