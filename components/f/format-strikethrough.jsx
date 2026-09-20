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
		"content": `<style>.rlzkpovle {
  fill: currentColor;
  d: path("M3 13.48v-1h18v1zm8.385-2.96V6.25H6.019V5H18v1.25h-5.365v4.27zm0 8.48v-3.558h1.25V19z");
}
</style><path class="rlzkpovle"/>`,
		"fallback": "material-symbols-light:format-strikethrough",
	});
}

export default Component;
