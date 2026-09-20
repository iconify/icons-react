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
		"content": `<style>.i2gscpqqp {
  fill: currentColor;
  d: path("M14.089 11.264L7.825 5H19.05zm5.744 9.99L13 14.42V19h-2v-6.579L2.746 4.167l.708-.713l17.092 17.092z");
}
</style><path class="i2gscpqqp"/>`,
		"fallback": "material-symbols-light:filter-alt-off-sharp",
	});
}

export default Component;
