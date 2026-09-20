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
		"content": `<style>.yfvgqhkbe {
  fill: currentColor;
  d: path("M5 21v-4H3v-2h2v-4.15L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V15h2v2h-2v4h-2v-4h-4v4h-2v-4H7v4zm2-6h4V6.275l-4 3.05zm6 0h4V9.325l-4-3.05z");
}
</style><path class="yfvgqhkbe"/>`,
		"fallback": "material-symbols:foundation",
	});
}

export default Component;
