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
		"content": `<style>.o3lw51fjp {
  fill: currentColor;
  d: path("m5.146 7.146l2.5-2.5a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.854 7.854a.5.5 0 1 1-.708-.708M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8");
}
</style><path class="o3lw51fjp"/>`,
		"fallback": "fluent:arrow-circle-up-16-regular",
	});
}

export default Component;
