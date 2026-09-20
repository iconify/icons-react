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
		"content": `<style>.ihp79i1yo {
  fill: currentColor;
  d: path("M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z");
}
</style><path class="ihp79i1yo"/>`,
		"fallback": "material-symbols:flutter-outline-rounded",
	});
}

export default Component;
