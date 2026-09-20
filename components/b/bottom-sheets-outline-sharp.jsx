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
		"content": `<style>.ew2xp-bxh {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-7.384h14V5H5zm0 1V19h14v-5.384zm0 0V19z");
}
</style><path class="ew2xp-bxh"/>`,
		"fallback": "material-symbols-light:bottom-sheets-outline-sharp",
	});
}

export default Component;
