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
		"content": `<style>.ig_5y-c5y {
  fill: currentColor;
  d: path("M20 11.476V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5v-5.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l6.342-5.638a5 5 0 0 1 6.644 0l6.342 5.638a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083Z");
}
</style><path class="ig_5y-c5y"/>`,
		"fallback": "coolicons:house-alt-3-fill-round",
	});
}

export default Component;
