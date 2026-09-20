import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tbiiy9pbz {
  fill: currentColor;
  d: path("M17.25 19a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm4-6a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zm3-6a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="tbiiy9pbz"/>`,
		"fallback": "fluent:filter-28-regular",
	});
}

export default Component;
