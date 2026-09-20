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
		"content": `<style>.b3qja7goc {
  fill: currentColor;
  d: path("M9 19h8v-3H9zm-4 2v-7h14v2h2v3h-2v2zM8.1 8l.3 1h7.2l.3-1zm-1.15 3L6 8H3V3h18v5h-3l-1.15 3z");
}
</style><path class="b3qja7goc"/>`,
		"fallback": "material-symbols:detector-battery-sharp",
	});
}

export default Component;
