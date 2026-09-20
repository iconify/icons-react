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
		"content": `<style>.ho4oa_b5z {
  fill: currentColor;
  d: path("M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19z");
}
</style><path class="ho4oa_b5z"/>`,
		"fallback": "material-symbols:format-italic-outline-sharp",
	});
}

export default Component;
