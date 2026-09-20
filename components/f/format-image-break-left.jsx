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
		"content": `<style>.dx63zibao {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h10v10zM3 5V3h18v2z");
}
</style><path class="dx63zibao"/>`,
		"fallback": "material-symbols:format-image-break-left",
	});
}

export default Component;
