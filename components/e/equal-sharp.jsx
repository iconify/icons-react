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
		"content": `<style>.qb6pouu4l {
  fill: currentColor;
  d: path("M4 17v-3h16v3zm0-7V7h16v3z");
}
</style><path class="qb6pouu4l"/>`,
		"fallback": "material-symbols:equal-sharp",
	});
}

export default Component;
