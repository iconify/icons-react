import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v4in35ekt {
  fill: currentColor;
  d: path("M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104");
}
</style><path class="v4in35ekt"/>`,
		"fallback": "ph:circle-fill",
	});
}

export default Component;
