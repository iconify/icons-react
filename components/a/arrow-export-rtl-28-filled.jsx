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
		"content": `<style>.xqcbmzbnw {
  fill: currentColor;
  d: path("M25 5a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M8.793 6.793a1 1 0 0 1 1.414 1.414L5.414 13H21a1 1 0 0 1 0 2H5.414l4.793 4.793a1 1 0 0 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414z");
}
</style><path class="xqcbmzbnw"/>`,
		"fallback": "fluent:arrow-export-rtl-28-filled",
	});
}

export default Component;
