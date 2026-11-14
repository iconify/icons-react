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
		"content": `<style>.c_5zbdqcz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.375 1.75H6.625q-3.375 0-3.375 3.375v13.75q0 3.375 3.375 3.375h10.75q3.375 0 3.375-3.375V5.125q0-3.375-3.375-3.375M10 6.75h4q.932 0 1.591.659T16.25 9v6q0 .932-.659 1.591T14 17.25h-4q-2.25 0-2.25-2.25V9q0-2.25 2.25-2.25");
}
</style><path class="c_5zbdqcz"/>`,
		"fallback": "uix-solid:frame-mat",
	});
}

export default Component;
