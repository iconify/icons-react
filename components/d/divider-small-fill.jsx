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
		"content": `<style>.er3-szkyi {
  fill: currentColor;
  d: path("M13 9v6a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0");
}
</style><path class="er3-szkyi"/>`,
		"fallback": "coolicons:divider-small-fill",
	});
}

export default Component;
