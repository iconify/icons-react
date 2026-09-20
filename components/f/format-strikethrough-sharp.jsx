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
		"content": `<style>.ta9c4kb7d {
  fill: currentColor;
  d: path("M2 14v-2h20v2zm8.5-4V7H5V4h14v3h-5.5v3zm0 10v-4h3v4z");
}
</style><path class="ta9c4kb7d"/>`,
		"fallback": "material-symbols:format-strikethrough-sharp",
	});
}

export default Component;
