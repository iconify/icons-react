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
		"content": `<style>.gpcspnb_g {
  fill: currentColor;
  d: path("M9 17h6v-2h-4v-2h4v-2h-4V9h4V7H9zm-6 4V3h18v18z");
}
</style><path class="gpcspnb_g"/>`,
		"fallback": "material-symbols:explicit-sharp",
	});
}

export default Component;
