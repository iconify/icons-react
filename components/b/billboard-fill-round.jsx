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
		"content": `<style>.wbl1biwqk {
  fill: currentColor;
  d: path("M7 2h10a5 5 0 0 1 5 5v4a5.01 5.01 0 0 1-4 4.901V21a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0v-5.099A5.01 5.01 0 0 1 2 11V7a5 5 0 0 1 5-5m10 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="wbl1biwqk"/>`,
		"fallback": "coolicons:billboard-fill-round",
	});
}

export default Component;
