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
		"content": `<style>.sascz8bmc {
  fill: currentColor;
  d: path("M4.615 20V4h6v3.289h-1V5h-4v14h4v-2.289h1V20zm8.77 0v-3.288h1V19h4V5h-4v2.289h-1V4h6v16zM11.5 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="sascz8bmc"/>`,
		"fallback": "material-symbols-light:combine-columns-outline-sharp",
	});
}

export default Component;
