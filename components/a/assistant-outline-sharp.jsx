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
		"content": `<style>.bbmh92o1v {
  fill: currentColor;
  d: path("m12 23l-3-3H3V2h18v18h-6l-3 3Zm-7-5h4.8l2.2 2.2l2.2-2.2H19V4H5v14ZM5 4v14V4Zm8.55 8.55L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16l1.55-3.45Z");
}
</style><path class="bbmh92o1v"/>`,
		"fallback": "material-symbols:assistant-outline-sharp",
	});
}

export default Component;
