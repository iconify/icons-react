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
		"content": `<style>.nu5_s-p_d {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4v-2h18v2zm0-4v-2h18v2zm0-4V7h18v2zm0-4V3h18v2z");
}
</style><path class="nu5_s-p_d"/>`,
		"fallback": "material-symbols:format-align-justify-sharp",
	});
}

export default Component;
