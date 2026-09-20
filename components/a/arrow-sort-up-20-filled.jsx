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
		"content": `<style>.iphl3rbvp {
  fill: currentColor;
  d: path("M9.75 3c.235 0 .452.108.59.278l2.94 2.945a.75.75 0 0 1 0 1.061a.75.75 0 0 1-1.058 0L10.5 5.566V16.25a.75.75 0 0 1-1.5 0V5.556L7.278 7.289a.75.75 0 0 1-1.059 0a.75.75 0 0 1 0-1.061L9.223 3.22A.73.73 0 0 1 9.75 3");
}
</style><path class="iphl3rbvp"/>`,
		"fallback": "fluent:arrow-sort-up-20-filled",
	});
}

export default Component;
