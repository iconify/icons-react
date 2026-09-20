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
		"content": `<style>.eeatk5cdg {
  fill: currentColor;
  d: path("m14 15.062l6.72 6.72a.75.75 0 0 0 1.06-1.061L3.28 2.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5 5a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825zm5-5l-2.88 2.878l-5.06-5.06L13.938 5zm-3.11-7.015a3.578 3.578 0 1 1 5.061 5.06L20.059 9L15 3.94z");
}
</style><path class="eeatk5cdg"/>`,
		"fallback": "fluent:edit-off-24-filled",
	});
}

export default Component;
