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
		"content": `<style>.kosbifw4e {
  fill: currentColor;
  d: path("M3 20V4h18v16zm3-5h5v-2H9.5v.5h-2v-3h2v.5H11V9H6zm7 0h5v-2h-1.5v.5h-2v-3h2v.5H18V9h-5z");
}
</style><path class="kosbifw4e"/>`,
		"fallback": "material-symbols:closed-caption-sharp",
	});
}

export default Component;
