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
		"content": `<style>.oayo3wp4s {
  fill: currentColor;
  d: path("M2 18V6h20v12zm5.25-3h1.5v-2.25H11v-1.5H8.75V9h-1.5v2.25H5v1.5h2.25z");
}
</style><path class="oayo3wp4s"/>`,
		"fallback": "material-symbols:buttons-alt-sharp",
	});
}

export default Component;
