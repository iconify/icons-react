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
		"content": `<style>.sz6ayyu2s {
  fill: currentColor;
  d: path("M4.5 2.25A2.25 2.25 0 0 1 6.692 4H14a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h9.293l-1.646-1.646a.5.5 0 1 1 .707-.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L15.293 15H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H6.692A2.25 2.25 0 1 1 4.5 2.25");
}
</style><path class="sz6ayyu2s"/>`,
		"fallback": "fluent:flow-arrow-20-filled",
	});
}

export default Component;
