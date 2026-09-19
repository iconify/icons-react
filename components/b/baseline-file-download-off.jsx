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
		"content": `<style>.umb8qabuw {
  fill: currentColor;
  d: path("M9 6.17V3h6v6h4l-3.59 3.59zm12.19 15.02L2.81 2.81L1.39 4.22L6.17 9H5l7 7l.59-.59L15.17 18H5v2h12.17l2.61 2.61z");
}
</style><path class="umb8qabuw"/>`,
		"fallback": "ic:baseline-file-download-off",
	});
}

export default Component;
