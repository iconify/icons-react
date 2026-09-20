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
		"content": `<style>.amzj2oqvt {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4v-2h10v2zm0-4v-2h10v2zm0-4V7h10v2zM3 5V3h18v2zm4 11l-4-4l4-4z");
}
</style><path class="amzj2oqvt"/>`,
		"fallback": "material-symbols:format-indent-decrease-outline-sharp",
	});
}

export default Component;
