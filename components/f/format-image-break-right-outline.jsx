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
		"content": `<style>.zo8djbh0d {
  fill: currentColor;
  d: path("M3 5V3h18v2zm8 12V7h10v10zm2-2h6V9h-6zM3 21v-2h18v2zm13-9");
}
</style><path class="zo8djbh0d"/>`,
		"fallback": "material-symbols:format-image-break-right-outline",
	});
}

export default Component;
