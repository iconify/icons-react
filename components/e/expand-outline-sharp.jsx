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
		"content": `<style>.gofi7tnoh {
  fill: currentColor;
  d: path("M4.5 21v-1h15v1zm7.5-2.384l-3.308-3.308l.708-.708l2.1 2.089V7.31L9.4 9.4l-.708-.708L12 5.385l3.308 3.307l-.708.708l-2.1-2.089v9.378l2.1-2.089l.708.708zM4.5 4V3h15v1z");
}
</style><path class="gofi7tnoh"/>`,
		"fallback": "material-symbols-light:expand-outline-sharp",
	});
}

export default Component;
