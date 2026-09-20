import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oiabtlblj {
  fill: currentColor;
  d: path("M9 13.25a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l9.22-9.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h3.69a.75.75 0 0 1 .75.75");
}
</style><path class="oiabtlblj"/>`,
		"fallback": "fluent:arrow-down-left-16-filled",
	});
}

export default Component;
