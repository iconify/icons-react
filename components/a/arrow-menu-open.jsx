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
		"content": `<style>.o32ra1bws {
  fill: currentColor;
  d: path("M9 21V3h2v18zm4-4V7l5 5z");
}
</style><path class="o32ra1bws"/>`,
		"fallback": "material-symbols:arrow-menu-open",
	});
}

export default Component;
