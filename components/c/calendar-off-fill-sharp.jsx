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
		"content": `<style>.vrfyt_btn {
  fill: currentColor;
  d: path("M22.707 21.293a.999.999 0 1 1-1.414 1.414L20.586 22H4a1 1 0 0 1-1-1V4.414L1.293 2.707a.999.999 0 1 1 1.414-1.414ZM15 3a1 1 0 0 1 2 0v1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0v-4h-4.757l-6-6H15ZM5 10v10h13.586l-10-10Z");
}
</style><path class="vrfyt_btn"/>`,
		"fallback": "coolicons:calendar-off-fill-sharp",
	});
}

export default Component;
