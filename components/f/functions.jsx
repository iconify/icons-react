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
		"content": `<style>.jy5-ernil {
  fill: currentColor;
  d: path("M6 20v-2l6.5-6L6 6V4h12v3h-7.225l5.375 5l-5.375 5H18v3z");
}
</style><path class="jy5-ernil"/>`,
		"fallback": "material-symbols:functions",
	});
}

export default Component;
