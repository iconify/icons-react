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
		"content": `<style>.d4p07gb4q {
  fill: currentColor;
  d: path("M16.425 20.975L13.6 18.15l1.4-1.4l1.425 1.425L19.6 15l1.4 1.4zM3 21v-2h9v2zm0-4v-2h9v2zm0-4v-2h18v2zm0-4V7h18v2zm0-4V3h18v2z");
}
</style><path class="d4p07gb4q"/>`,
		"fallback": "material-symbols:grading-outline",
	});
}

export default Component;
