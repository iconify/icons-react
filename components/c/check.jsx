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
		"content": `<style>.t3us7igxz {
  fill: currentColor;
  d: path("M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z");
}
</style><path class="t3us7igxz"/>`,
		"fallback": "ic:check",
	});
}

export default Component;
