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
		"content": `<style>.fdz5djndi {
  fill: currentColor;
  d: path("M7 7H5.5A1.5 1.5 0 0 0 4 8.5v6A1.5 1.5 0 0 0 5.5 16h4a1.5 1.5 0 0 0 1.413-1h1.037a2.5 2.5 0 0 1-2.45 2h-4A2.5 2.5 0 0 1 3 14.5v-6A2.5 2.5 0 0 1 5.5 6H7zm7.5-4A2.5 2.5 0 0 1 17 5.5v6a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 8 11.5v-6A2.5 2.5 0 0 1 10.5 3zm-4 1A1.5 1.5 0 0 0 9 5.5v6a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 14.5 4z");
}
</style><path class="fdz5djndi"/>`,
		"fallback": "fluent:copy-20-regular",
	});
}

export default Component;
