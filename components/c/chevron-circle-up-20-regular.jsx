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
		"content": `<style>.xgn_xbcik {
  fill: currentColor;
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0m7 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16m-3.146-6.146a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 8.707z");
}
</style><path class="xgn_xbcik"/>`,
		"fallback": "fluent:chevron-circle-up-20-regular",
	});
}

export default Component;
