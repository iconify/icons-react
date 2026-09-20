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
		"content": `<style>.ledy04cbl {
  fill: currentColor;
  d: path("M3 20V4h18v16zm2-2h14V6H5zm1-3h5v-2H9.5v.5h-2v-3h2v.5H11V9H6zm7 0h5v-2h-1.5v.5h-2v-3h2v.5H18V9h-5zm-8 3V6z");
}
</style><path class="ledy04cbl"/>`,
		"fallback": "material-symbols:closed-caption-outline-sharp",
	});
}

export default Component;
