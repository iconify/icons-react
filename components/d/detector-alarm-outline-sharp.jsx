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
		"content": `<style>.braq5_b9o {
  fill: currentColor;
  d: path("M11 21v-5h2v5zm8.075-2.525l-3.55-3.525l1.425-1.425l3.525 3.55zm-14.15 0l-1.4-1.4l3.525-3.55l1.425 1.425zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm-1.15 3L6 8H3V3h18v5h-3l-1.15 3zM5 5v1z");
}
</style><path class="braq5_b9o"/>`,
		"fallback": "material-symbols:detector-alarm-outline-sharp",
	});
}

export default Component;
