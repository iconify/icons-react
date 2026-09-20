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
		"content": `<style>.nnj3-ckvx {
  fill: currentColor;
  d: path("M11 14V5h2v9zm0 5v-2h2v2zM1 23v-5h2v3h3v2zm17 0v-2h3v-3h2v5zM1 6V1h5v2H3v3zm20 0V3h-3V1h5v5z");
}
</style><path class="nnj3-ckvx"/>`,
		"fallback": "material-symbols:frame-exclamation-outline-sharp",
	});
}

export default Component;
