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
		"content": `<style>.gx_ofx7up {
  fill: currentColor;
  d: path("M17 21.901V15a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v6.901A5.01 5.01 0 0 1 3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5.01 5.01 0 0 1-4 4.901M15 17H9v-2a.997.997 0 0 1 1-1h4a.997.997 0 0 1 1 1Zm-6 5v-3h6v3Z");
}
</style><path class="gx_ofx7up"/>`,
		"fallback": "coolicons:house-garage-fill-round",
	});
}

export default Component;
