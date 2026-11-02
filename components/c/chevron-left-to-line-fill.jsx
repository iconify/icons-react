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
		"content": `<style>.byq9j8u9d {
  fill: currentColor;
  d: path("M8 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m9.707.707L12.414 12l5.293 5.293a.999.999 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a.999.999 0 1 1 1.414 1.414");
}
</style><path class="byq9j8u9d"/>`,
		"fallback": "coolicons:chevron-left-to-line-fill",
	});
}

export default Component;
