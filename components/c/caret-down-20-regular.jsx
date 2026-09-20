import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w5ip_dbly {
  fill: currentColor;
  d: path("M5.019 8.628A1 1 0 0 1 5.797 7h8.407a1 1 0 0 1 .778 1.628l-3.815 4.723a1.5 1.5 0 0 1-2.334 0zM14.204 8H5.797l3.814 4.723a.5.5 0 0 0 .778 0z");
}
</style><path class="w5ip_dbly"/>`,
		"fallback": "fluent:caret-down-20-regular",
	});
}

export default Component;
