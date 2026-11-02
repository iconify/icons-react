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
		"content": `<style>.gb6lnqq6r {
  fill: currentColor;
  d: path("M2 9a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm20 5a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><path class="gb6lnqq6r"/>`,
		"fallback": "coolicons:battery-empty-fill",
	});
}

export default Component;
