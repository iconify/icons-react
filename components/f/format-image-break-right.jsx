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
		"content": `<style>.p4e5arffn {
  fill: currentColor;
  d: path("M3 5V3h18v2zm8 12V7h10v10zm-8 4v-2h18v2z");
}
</style><path class="p4e5arffn"/>`,
		"fallback": "material-symbols:format-image-break-right",
	});
}

export default Component;
