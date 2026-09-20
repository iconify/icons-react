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
		"content": `<style>.zrrklbb1b {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h9a.75.75 0 0 0 0-1.5h-9a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h9a.75.75 0 0 0 0-1.5zm11.28 4.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H8.75a.75.75 0 0 0 0 1.5h10.69l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z");
}
</style><path class="zrrklbb1b"/>`,
		"fallback": "fluent:arrow-exit-24-regular",
	});
}

export default Component;
