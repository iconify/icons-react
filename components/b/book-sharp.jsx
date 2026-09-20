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
		"content": `<style>.qf6fnmbaw {
  fill: currentColor;
  d: path("M4 22V2h16v20zm7-11l2.5-1.5L16 11V4h-5z");
}
</style><path class="qf6fnmbaw"/>`,
		"fallback": "material-symbols:book-sharp",
	});
}

export default Component;
