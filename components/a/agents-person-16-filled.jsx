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
		"content": `<style>.vsfeewetv {
  fill: currentColor;
  d: path("M14.5 11a1.5 1.5 0 0 1 1.5 1.5c0 1.245-1 2.5-3.5 2.5S9 13.75 9 12.5a1.5 1.5 0 0 1 1.5-1.5zM8.44 2a2.5 2.5 0 0 0-.383.747L5.023 12.35a.5.5 0 1 0 .954.3L9.01 3.048A1.5 1.5 0 0 1 10.388 2a2.5 2.5 0 0 1 2.097 1.249l1.136 1.968a2.99 2.99 0 0 0-3.408.842l.762-2.41a.5.5 0 0 0-.953-.3l-3.034 9.602A1.5 1.5 0 0 1 5.61 14a2.5 2.5 0 0 1-2.096-1.249l-2.309-4a1.5 1.5 0 0 1 0-1.5l2.598-4.5A1.5 1.5 0 0 1 5.102 2zm4.06 4a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="vsfeewetv"/>`,
		"fallback": "fluent:agents-person-16-filled",
	});
}

export default Component;
