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
		"content": `<style>.e3tzezzku {
  fill: currentColor;
  d: path("M10.854 1.146a.5.5 0 0 1 0 .708L2.707 10H7.53a.5.5 0 0 1 0 1H1.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793l8.146-8.147a.5.5 0 0 1 .708 0");
}
</style><path class="e3tzezzku"/>`,
		"fallback": "fluent:arrow-down-left-12-regular",
	});
}

export default Component;
