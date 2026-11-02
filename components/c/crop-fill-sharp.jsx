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
		"content": `<style>.aqyjho4xn {
  fill: currentColor;
  d: path("M7 3v14h14a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H6a1 1 0 0 1-1-1V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0m3 2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V7h-7a1 1 0 0 1 0-2");
}
</style><path class="aqyjho4xn"/>`,
		"fallback": "coolicons:crop-fill-sharp",
	});
}

export default Component;
