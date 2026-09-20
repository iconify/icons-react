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
		"content": `<style>.w4q8w3gcl {
  fill: currentColor;
  d: path("M4 10a6 6 0 0 1 10.472-4H12.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.601a7 7 0 1 0 1.98 4.361a.5.5 0 1 0-.998.076Q16 9.766 16 10a6 6 0 0 1-12 0");
}
</style><path class="w4q8w3gcl"/>`,
		"fallback": "fluent:arrow-clockwise-20-regular",
	});
}

export default Component;
