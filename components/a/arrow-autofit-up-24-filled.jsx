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
		"content": `<style>.vs_7k0bej {
  fill: currentColor;
  d: path("M16.37 3.225a1 1 0 0 1 1.337.068l2.5 2.5a1 1 0 0 1-1.414 1.414L18 6.414V20a1 1 0 0 1-2 0V6.414l-.793.793a1 1 0 0 1-1.414-1.414l2.5-2.5zM11 4a1 1 0 1 1 0 2H6.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H13a1 1 0 1 1 0 2H6.5A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4z");
}
</style><path class="vs_7k0bej"/>`,
		"fallback": "fluent:arrow-autofit-up-24-filled",
	});
}

export default Component;
