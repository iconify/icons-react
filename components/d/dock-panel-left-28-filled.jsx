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
		"content": `<style>.t88z1vkzp {
  fill: currentColor;
  d: path("M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zM22.25 21.5a2.25 2.25 0 0 0 2.25-2.25V7.75a2.25 2.25 0 0 0-2.25-2.25H10.5v16z");
}
</style><path class="t88z1vkzp"/>`,
		"fallback": "fluent:dock-panel-left-28-filled",
	});
}

export default Component;
