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
		"content": `<style>.k4swmqb3n {
  fill: currentColor;
  d: path("M5 7h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m2 5a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z");
}
</style><path class="k4swmqb3n"/>`,
		"fallback": "coolicons:air-conditioner-off-centered-fill",
	});
}

export default Component;
