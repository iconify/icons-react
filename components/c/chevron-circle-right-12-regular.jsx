import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gib8wmbbz {
  fill: currentColor;
  d: path("M5.854 4.146a.5.5 0 1 0-.708.708L6.293 6L5.146 7.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><path class="gib8wmbbz"/>`,
		"fallback": "fluent:chevron-circle-right-12-regular",
	});
}

export default Component;
