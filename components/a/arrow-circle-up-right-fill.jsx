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
		"content": `<style>.voeiu7icz {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 120a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z");
}
</style><path class="voeiu7icz"/>`,
		"fallback": "ph:arrow-circle-up-right-fill",
	});
}

export default Component;
