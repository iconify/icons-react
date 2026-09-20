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
		"content": `<style>.x9aatyexn {
  fill: currentColor;
  d: path("M11.5 5v12.079l-5.792-5.792L5 12l7 7l7-7l-.708-.713l-5.792 5.792V5z");
}
</style><path class="x9aatyexn"/>`,
		"fallback": "material-symbols-light:arrow-downward-outline",
	});
}

export default Component;
