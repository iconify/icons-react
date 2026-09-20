import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b6eit0v-v {
  fill: currentColor;
  d: path("M18.293 19.768a.75.75 0 0 0-.025-1.06l-4.146-3.958H25.25a.75.75 0 0 0 0-1.5H14.122l4.146-3.957a.75.75 0 0 0-1.036-1.086l-5.5 5.25a.75.75 0 0 0 0 1.085l5.5 5.25a.75.75 0 0 0 1.06-.024M6 10a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 1.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5");
}
</style><path class="b6eit0v-v"/>`,
		"fallback": "fluent:arrow-step-in-left-28-regular",
	});
}

export default Component;
