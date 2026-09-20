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
		"content": `<style>.btzt_lbad {
  fill: currentColor;
  d: path("m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z");
}
</style><path class="btzt_lbad"/>`,
		"fallback": "material-symbols:check-small-outline",
	});
}

export default Component;
