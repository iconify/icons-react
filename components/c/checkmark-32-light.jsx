import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zdhgclfwi {
  fill: currentColor;
  d: path("M29.854 5.146a.5.5 0 0 1 0 .708l-19 19a.5.5 0 0 1-.708 0l-8-8a.5.5 0 0 1 .708-.708l7.646 7.647L29.146 5.146a.5.5 0 0 1 .708 0");
}
</style><path class="zdhgclfwi"/>`,
		"fallback": "fluent:checkmark-32-light",
	});
}

export default Component;
