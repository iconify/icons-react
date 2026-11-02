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
		"content": `<style>.r-8blbyst {
  fill: currentColor;
  d: path("M19 5a1 1 0 0 1 1 1v9.171a3 3 0 1 1-2 0V7h-4.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L13.414 5ZM6 8.829v6.342a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0");
}
</style><path class="r-8blbyst"/>`,
		"fallback": "coolicons:git-pull-request-fill-sharp",
	});
}

export default Component;
