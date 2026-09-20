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
		"content": `<style>.oqu2z7j_m {
  fill: currentColor;
  d: path("M3 21v-2h18v2zM3 5V3h18v2z");
}
</style><path class="oqu2z7j_m"/>`,
		"fallback": "material-symbols:density-large",
	});
}

export default Component;
