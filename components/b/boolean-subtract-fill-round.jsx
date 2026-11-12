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
		"content": `<style>.d-xiqabfp {
  fill: currentColor;
  d: path("M13 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a.997.997 0 0 0-1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm9 9v2a1 1 0 0 1-2 0v-2a1 1 0 0 0-1-1a1 1 0 0 1 0-2a3 3 0 0 1 3 3m0 8a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0Zm-11 1h2a1 1 0 0 1 0 2h-2a3 3 0 0 1-3-3a1 1 0 0 1 2 0a1 1 0 0 0 1 1");
}
</style><path class="d-xiqabfp"/>`,
		"fallback": "coolicons:boolean-subtract-fill-round",
	});
}

export default Component;
