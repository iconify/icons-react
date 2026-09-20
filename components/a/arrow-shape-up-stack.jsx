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
		"content": `<style>.ch9wtc8lo {
  fill: currentColor;
  d: path("M9 20v-3H4l8-9l8 9h-5v3zm-5-8l8-9l8 9h-2.675L12 6l-5.325 6z");
}
</style><path class="ch9wtc8lo"/>`,
		"fallback": "material-symbols:arrow-shape-up-stack",
	});
}

export default Component;
