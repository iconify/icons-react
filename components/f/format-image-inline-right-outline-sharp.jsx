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
		"content": `<style>.w3x1webuz {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4V7h10v10zm2-2h6V9h-6zM3 5V3h18v2zm0 12v-2h6v2zm13-5");
}
</style><path class="w3x1webuz"/>`,
		"fallback": "material-symbols:format-image-inline-right-outline-sharp",
	});
}

export default Component;
