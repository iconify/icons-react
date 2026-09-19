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
		"content": `<style>.hnp3t2qtv {
  fill: currentColor;
  d: path("M12 7.77L18.39 18H5.61zM12 4L2 20h20z");
}
</style><path class="hnp3t2qtv"/>`,
		"fallback": "ic:baseline-change-history",
	});
}

export default Component;
