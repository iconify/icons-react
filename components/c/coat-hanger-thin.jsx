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
		"content": `<style>.ynfroubxw {
  fill: currentColor;
  d: path("M239.18 174.4L134.67 96l27.72-20.8A4 4 0 0 0 164 72a36 36 0 1 0-72 0a4 4 0 0 0 8 0a28 28 0 0 1 55.92-2l-30.26 22.7l-.14.1l-108.7 81.6A12 12 0 0 0 24 196h208a12 12 0 0 0 7.2-21.6Zm-3.41 10.87A3.88 3.88 0 0 1 232 188H24a4 4 0 0 1-2.4-7.2L128 101l106.38 79.8a3.88 3.88 0 0 1 1.39 4.47");
}
</style><path class="ynfroubxw"/>`,
		"fallback": "ph:coat-hanger-thin",
	});
}

export default Component;
