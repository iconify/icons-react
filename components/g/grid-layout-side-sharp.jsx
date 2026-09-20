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
		"content": `<style>.liby2ob4l {
  fill: currentColor;
  d: path("M21 21V3zM3 21h10V3H3zm18 0V3h-6v18z");
}
</style><path class="liby2ob4l"/>`,
		"fallback": "material-symbols:grid-layout-side-sharp",
	});
}

export default Component;
