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
		"content": `<style>.sww9guf7j {
  fill: currentColor;
  d: path("M14 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-3.75.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 7h-6.5A1.75 1.75 0 0 1 2 5.25v-1.5C2 2.784 2.784 2 3.75 2zm0 7c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 14h-4.5A1.75 1.75 0 0 1 4 12.25v-1.5C4 9.784 4.784 9 5.75 9z");
}
</style><path class="sww9guf7j"/>`,
		"fallback": "fluent:align-right-16-filled",
	});
}

export default Component;
