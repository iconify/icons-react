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
		"content": `<style>.r56g5dama {
  fill: currentColor;
  d: path("M6 8V6h12v2zm1.4 10.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.6z");
}
</style><path class="r56g5dama"/>`,
		"fallback": "material-symbols:chevron-line-up-outline",
	});
}

export default Component;
