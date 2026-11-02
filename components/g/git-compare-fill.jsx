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
		"content": `<style>.ft8p6yb8y {
  fill: currentColor;
  d: path("M17 5a3 3 0 0 1 3 3v7.171a3 3 0 1 1-2 0V8a1 1 0 0 0-1-1h-3.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L13.414 5ZM6 8.829V16a1 1 0 0 0 1 1h3.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L10.586 19H7a3 3 0 0 1-3-3V8.829a3 3 0 1 1 2 0");
}
</style><path class="ft8p6yb8y"/>`,
		"fallback": "coolicons:git-compare-fill",
	});
}

export default Component;
