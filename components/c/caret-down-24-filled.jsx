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
		"content": `<style>.ah42fcbdg {
  fill: currentColor;
  d: path("M6.102 8c-1.074 0-1.648 1.265-.94 2.073l5.521 6.31a1.75 1.75 0 0 0 2.634 0l5.522-6.31c.707-.808.133-2.073-.94-2.073z");
}
</style><path class="ah42fcbdg"/>`,
		"fallback": "fluent:caret-down-24-filled",
	});
}

export default Component;
