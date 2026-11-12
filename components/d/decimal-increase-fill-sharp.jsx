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
		"content": `<style>.xnp6eqb7r {
  fill: currentColor;
  d: path("M6 5a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0Zm8 0a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0ZM8 5v2a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0m8 0v2a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0M3 8h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m14.293 12.293L18.586 19H3a1 1 0 0 1 0-2h15.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><path class="xnp6eqb7r"/>`,
		"fallback": "coolicons:decimal-increase-fill-sharp",
	});
}

export default Component;
