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
		"content": `<style>.l36w5njqm {
  fill: currentColor;
  d: path("M15.75 3.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V6.06L6.06 15h4.19a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19L13.94 5H9.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="l36w5njqm"/>`,
		"fallback": "fluent:arrow-maximize-20-filled",
	});
}

export default Component;
