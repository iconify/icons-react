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
		"content": `<style>.zn5yfubnp {
  fill: currentColor;
  d: path("M4 15h4.25l.75-.75v-4.5L8.25 9H4zm1.5-1.5v-3h2v3zm5.6 1.5h1.5l1.75-6h-1.5l-1 3.45l-1-3.45h-1.5zm3.9 0h1.5v-2h1.15l.85 2H20l-.9-2.1h.9V9h-5zm1.5-3.5v-1h2v1zM1 20V4h22v16z");
}
</style><path class="zn5yfubnp"/>`,
		"fallback": "material-symbols:fiber-dvr-sharp",
	});
}

export default Component;
