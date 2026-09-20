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
		"content": `<style>.zvg0ynbpv {
  fill: currentColor;
  d: path("M13.854 2.146a.5.5 0 0 1 0 .708L8.707 8H12.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.793l5.146-5.147a.5.5 0 0 1 .708 0M6 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="zvg0ynbpv"/>`,
		"fallback": "fluent:arrow-step-in-diagonal-down-left-16-regular",
	});
}

export default Component;
