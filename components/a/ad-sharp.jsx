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
		"content": `<style>.ya2--l60b {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V8H5z");
}
</style><path class="ya2--l60b"/>`,
		"fallback": "material-symbols:ad-sharp",
	});
}

export default Component;
