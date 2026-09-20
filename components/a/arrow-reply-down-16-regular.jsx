import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vpsno5uoq {
  fill: currentColor;
  d: path("M13.5 3a.5.5 0 0 1 .5.5A5.5 5.5 0 0 1 8.5 9H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 1 1 .708.708L3.707 8H8.5A4.5 4.5 0 0 0 13 3.5a.5.5 0 0 1 .5-.5");
}
</style><path class="vpsno5uoq"/>`,
		"fallback": "fluent:arrow-reply-down-16-regular",
	});
}

export default Component;
