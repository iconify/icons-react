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
		"content": `<style>.fnpnvqr1y {
  fill: currentColor;
  d: path("M3 21V3h2v18zm16 0V3h2v18zM7 13v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="fnpnvqr1y"/>`,
		"fallback": "material-symbols:fit-width",
	});
}

export default Component;
