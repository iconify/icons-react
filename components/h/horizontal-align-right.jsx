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
		"content": `<style>.rm9gs0bpl {
  fill: currentColor;
  d: path("M19 20V4h2v16zm-7-3l-1.4-1.4l2.6-2.6H3v-2h10.2l-2.6-2.6L12 7l5 5z");
}
</style><path class="rm9gs0bpl"/>`,
		"fallback": "material-symbols:horizontal-align-right",
	});
}

export default Component;
