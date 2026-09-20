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
		"content": `<style>.xlamumbqb {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-9h14V5H5z");
}
</style><path class="xlamumbqb"/>`,
		"fallback": "material-symbols:bottom-sheets-sharp",
	});
}

export default Component;
