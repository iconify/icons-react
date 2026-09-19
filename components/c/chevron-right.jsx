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
		"content": `<style>.qap61s_na {
  fill: currentColor;
  d: path("M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z");
}
</style><path class="qap61s_na"/>`,
		"fallback": "ic:chevron-right",
	});
}

export default Component;
