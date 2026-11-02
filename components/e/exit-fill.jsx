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
		"content": `<style>.o5-iq3b3e {
  fill: currentColor;
  d: path("M22 17v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0m-7.707-2.707L15.586 13H8a1 1 0 0 1 0-2h7.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><path class="o5-iq3b3e"/>`,
		"fallback": "coolicons:exit-fill",
	});
}

export default Component;
