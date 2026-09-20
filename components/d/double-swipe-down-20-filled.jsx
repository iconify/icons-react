import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_tehs2uk {
  fill: currentColor;
  d: path("M6.28 17.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06L5 15.44V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM2 5.75a3.75 3.75 0 0 0 2 3.317V7.164a2.25 2.25 0 1 1 3.5 0v1.903A3.75 3.75 0 0 0 5.75 2A3.75 3.75 0 0 0 2 5.75m10.5 3.317A3.75 3.75 0 0 1 14.25 2A3.75 3.75 0 0 1 16 9.067V7.164a2.25 2.25 0 1 0-3.5 0zm2.28 8.713a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06z");
}
</style><path class="d_tehs2uk"/>`,
		"fallback": "fluent:double-swipe-down-20-filled",
	});
}

export default Component;
