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
		"content": `<style>.jcmnkzb5p {
  fill: currentColor;
  d: path("M5 6H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h4A1.5 1.5 0 0 0 9 12.5V12h1v.5A2.5 2.5 0 0 1 7.5 15h-4A2.5 2.5 0 0 1 1 12.5v-5A2.5 2.5 0 0 1 3.5 5H5zm7.5-5A2.5 2.5 0 0 1 15 3.5v5a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 6 8.5v-5A2.5 2.5 0 0 1 8.5 1zm-4 1A1.5 1.5 0 0 0 7 3.5v5A1.5 1.5 0 0 0 8.5 10h4A1.5 1.5 0 0 0 14 8.5v-5A1.5 1.5 0 0 0 12.5 2z");
}
</style><path class="jcmnkzb5p"/>`,
		"fallback": "fluent:copy-16-regular",
	});
}

export default Component;
