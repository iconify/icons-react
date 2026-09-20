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
		"content": `<style>.qpfeooy5w {
  fill: currentColor;
  d: path("M16.854 3.146a.5.5 0 0 1 0 .708L9.707 11H14.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793l7.146-7.147a.5.5 0 0 1 .708 0M5 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="qpfeooy5w"/>`,
		"fallback": "fluent:arrow-step-in-diagonal-down-left-20-filled",
	});
}

export default Component;
