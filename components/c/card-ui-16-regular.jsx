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
		"content": `<style>.bgb9ids9p {
  fill: currentColor;
  d: path("M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zm-9 1A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm3.75 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-.5A.75.75 0 0 1 3.75 9zm3.25-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm-3-2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z");
}
</style><path class="bgb9ids9p"/>`,
		"fallback": "fluent:card-ui-16-regular",
	});
}

export default Component;
