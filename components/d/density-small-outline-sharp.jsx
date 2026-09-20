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
		"content": `<style>.vwx2fab_g {
  fill: currentColor;
  d: path("M4 21v-1h16v1zm0-5.673v-1h16v1zm0-5.654v-1h16v1zM4 4V3h16v1z");
}
</style><path class="vwx2fab_g"/>`,
		"fallback": "material-symbols-light:density-small-outline-sharp",
	});
}

export default Component;
