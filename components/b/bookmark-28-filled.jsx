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
		"content": `<style>.oywfsebor {
  fill: currentColor;
  d: path("M9.25 3.5A3.25 3.25 0 0 0 6 6.75v18a.75.75 0 0 0 1.203.598L14 20.19l6.797 5.157A.75.75 0 0 0 22 24.75v-18a3.25 3.25 0 0 0-3.25-3.25z");
}
</style><path class="oywfsebor"/>`,
		"fallback": "fluent:bookmark-28-filled",
	});
}

export default Component;
