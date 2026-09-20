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
		"content": `<style>.orx-m-b8p {
  fill: currentColor;
  d: path("M13 11.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 11.5V10h10zM11.5 1a.5.5 0 0 1 0 1H11v3.05a2.5 2.5 0 0 1 2 2.45V9H3V7.5a2.5 2.5 0 0 1 2-2.45V2h-.5a.5.5 0 0 1 0-1zM6 5h1.5V4a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1v1H10V2H6z");
}
</style><path class="orx-m-b8p"/>`,
		"fallback": "fluent:gas-propane-16-filled",
	});
}

export default Component;
