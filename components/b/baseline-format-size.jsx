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
		"content": `<style>.uxms23bbn {
  fill: currentColor;
  d: path("M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z");
}
</style><path class="uxms23bbn"/>`,
		"fallback": "ic:baseline-format-size",
	});
}

export default Component;
