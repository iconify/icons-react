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
		"content": `<style>.sjmjzm8wg {
  fill: currentColor;
  d: path("M7.4 22L6 20.6l6-6l6 6l-1.4 1.4l-4.6-4.6zM12 9.4l-6-6L7.4 2L12 6.6L16.6 2L18 3.4z");
}
</style><path class="sjmjzm8wg"/>`,
		"fallback": "material-symbols:collapse-all-outline",
	});
}

export default Component;
