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
		"content": `<style>.ikn_s50ly {
  fill: currentColor;
  d: path("M4 5v6h6V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H4v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m10 11v-4a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2h-2a2 2 0 0 0-2 2v.535A4.002 4.002 0 0 1 21.464 18A4 4 0 0 1 14 16m2.157.778a2 2 0 1 0 3.686-1.556a2 2 0 0 0-3.686 1.556");
}
</style><path class="ikn_s50ly"/>`,
		"fallback": "coolicons:heading-6-fill",
	});
}

export default Component;
