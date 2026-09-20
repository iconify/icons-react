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
		"content": `<style>.mb6kg2itz {
  fill: currentColor;
  d: path("M9 20v-3H4l8-9l8 9h-5v3zm2-2h2v-3h2.55L12 11l-3.55 4H11zm-7-6l8-9l8 9h-2.675L12 6l-5.325 6zm8 3");
}
</style><path class="mb6kg2itz"/>`,
		"fallback": "material-symbols:arrow-shape-up-stack-outline",
	});
}

export default Component;
