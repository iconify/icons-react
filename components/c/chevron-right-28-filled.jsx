import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pyrak7i_g {
  fill: currentColor;
  d: path("M9.543 4.293a1 1 0 0 1 1.414 0l8.75 8.75a1 1 0 0 1 0 1.414l-8.75 8.75a1 1 0 0 1-1.414-1.414l8.043-8.043l-8.043-8.043a1 1 0 0 1 0-1.414");
}
</style><path class="pyrak7i_g"/>`,
		"fallback": "fluent:chevron-right-28-filled",
	});
}

export default Component;
