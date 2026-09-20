import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ow_veqbmd {
  fill: currentColor;
  d: path("M52.44 36a6 6 0 0 0-8.88 8l14.37 15.8A97.42 97.42 0 0 0 34 124v84a14 14 0 0 0 14 14h84a98.24 98.24 0 0 0 56.82-18.18L203.56 220a6 6 0 0 0 8.88-8.08ZM132 210H48a2 2 0 0 1-2-2v-84a85.46 85.46 0 0 1 20.08-55.2L180.7 194.88A84.9 84.9 0 0 1 132 210m98-86a97.86 97.86 0 0 1-14.06 50.61a6 6 0 0 1-5.15 2.9a6 6 0 0 1-5.12-9.1a86 86 0 0 0-110.88-122a6 6 0 1 1-5.2-10.81A97.1 97.1 0 0 1 132 26a98.11 98.11 0 0 1 98 98");
}
</style><path class="ow_veqbmd"/>`,
		"fallback": "ph:chat-teardrop-slash-light",
	});
}

export default Component;
