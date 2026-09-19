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
		"content": `<style>.lu82cwb9e {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2z");
}
</style><path class="lu82cwb9e"/>`,
		"fallback": "ic:baseline-night-shelter",
	});
}

export default Component;
