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
		"content": `<style>.afos8yb_y {
  fill: currentColor;
  d: path("M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z");
}
</style><path class="afos8yb_y"/>`,
		"fallback": "ic:baseline-bar-chart",
	});
}

export default Component;
