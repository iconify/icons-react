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
		"content": `<style>.fu6jrdbix {
  fill: currentColor;
  d: path("M11 17V7l-5 5zm2 4h2V3h-2z");
}
</style><path class="fu6jrdbix"/>`,
		"fallback": "material-symbols:arrow-menu-close",
	});
}

export default Component;
