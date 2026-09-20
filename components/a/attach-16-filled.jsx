import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rkz2g4glm {
  fill: currentColor;
  d: path("M9.5 1.75a3.73 3.73 0 0 0-2.653 1.098L2.252 7.444a.75.75 0 0 0 1.061 1.063L7.91 3.909a2.252 2.252 0 0 1 3.182 3.182l-5.303 5.303a.75.75 0 0 1-1.06-1.06l5.303-5.303A.75.75 0 0 0 8.97 4.968l-5.304 5.305a2.252 2.252 0 0 0 3.182 3.182l5.303-5.303A3.73 3.73 0 0 0 13.25 5.5A3.754 3.754 0 0 0 9.5 1.75");
}
</style><path class="rkz2g4glm"/>`,
		"fallback": "fluent:attach-16-filled",
	});
}

export default Component;
