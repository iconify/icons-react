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
		"content": `<style>.h-nr8zbtq {
  fill: currentColor;
  d: path("M7 18V6h3v12zm7 0V6h3v12zM2 4V2h20v2zm0 18v-2h20v2z");
}
</style><path class="h-nr8zbtq"/>`,
		"fallback": "material-symbols:align-items-stretch",
	});
}

export default Component;
