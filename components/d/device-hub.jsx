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
		"content": `<style>.f7lfju_2t {
  fill: currentColor;
  d: path("M4 20v-4h3.385l4.115-4.115V8.992q-.861-.229-1.43-.895q-.57-.666-.57-1.558q0-1.039.73-1.77T12 4.04t1.77.73t.73 1.77q0 .892-.57 1.558q-.568.667-1.43.895v2.893L16.616 16H20v4h-4v-3.165l-4-4l-4 4V20z");
}
</style><path class="f7lfju_2t"/>`,
		"fallback": "material-symbols-light:device-hub",
	});
}

export default Component;
