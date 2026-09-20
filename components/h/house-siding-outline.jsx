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
		"content": `<style>.x5re03gkg {
  fill: currentColor;
  d: path("M5 21V10.85L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V21h-2v-3H7v3zm2-9h10v-2H7zm0 4h10v-2H7zm1.75-8h6.5L12 5.525z");
}
</style><path class="x5re03gkg"/>`,
		"fallback": "material-symbols:house-siding-outline",
	});
}

export default Component;
