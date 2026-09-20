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
		"content": `<style>.o53ml77sg {
  fill: currentColor;
  d: path("M7.692 20.5V7.058h2.039V20.5zm6.577-6V7.058h2.039V14.5zM3 4.48v-1h18v1z");
}
</style><path class="o53ml77sg"/>`,
		"fallback": "material-symbols-light:align-vertical-top-outline",
	});
}

export default Component;
