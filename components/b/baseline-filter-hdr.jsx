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
		"content": `<style>.zptxq6btz {
  fill: currentColor;
  d: path("m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z");
}
</style><path class="zptxq6btz"/>`,
		"fallback": "ic:baseline-filter-hdr",
	});
}

export default Component;
