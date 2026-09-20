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
		"content": `<style>.y1i_uabgk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5z");
}
</style><path class="y1i_uabgk"/>`,
		"fallback": "material-symbols-light:check-box-outline-blank-sharp",
	});
}

export default Component;
