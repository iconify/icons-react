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
		"content": `<style>.n4jizvbmj {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6");
}
</style><path class="n4jizvbmj"/>`,
		"fallback": "fluent:circle-half-fill-16-regular",
	});
}

export default Component;
