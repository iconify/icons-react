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
		"content": `<style>.vq29xabcs {
  fill: currentColor;
  d: path("M9.5 13.385h-6v-1h6zm6.827 4.577V7.473l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z");
}
</style><path class="vq29xabcs"/>`,
		"fallback": "material-symbols-light:exposure-neg-1-outline",
	});
}

export default Component;
