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
		"content": `<style>.a1vldsbmn {
  fill: currentColor;
  d: path("m209.48 99.71l-75.06 30l52.74 67.8a4 4 0 0 1-.71 5.62a3.93 3.93 0 0 1-2.45.87a4 4 0 0 1-3.16-1.54L128 134.52l-52.84 67.94A4 4 0 0 1 72 204a4 4 0 0 1-2.45-.84a4 4 0 0 1-.71-5.62l52.74-67.8l-75.06-30a4 4 0 1 1 3-7.42L124 122.09V40a4 4 0 0 1 8 0v82.09l74.51-29.8a4 4 0 1 1 3 7.42Z");
}
</style><path class="a1vldsbmn"/>`,
		"fallback": "ph:asterisk-simple-thin",
	});
}

export default Component;
