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
		"content": `<style>.weugfgbse {
  fill: currentColor;
  d: path("M3 17V7h10v10zM3 5V3h18v2zm12 4V7h6v2zm0 4v-2h6v2zm0 4v-2h6v2zM3 21v-2h18v2z");
}
</style><path class="weugfgbse"/>`,
		"fallback": "material-symbols:format-image-left",
	});
}

export default Component;
