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
		"content": `<style>.gs-hhuboj {
  fill: currentColor;
  d: path("M8.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-1 0v6.793L3.854 3.146a.5.5 0 1 0-.708.708L15.293 16z");
}
</style><path class="gs-hhuboj"/>`,
		"fallback": "fluent:arrow-down-right-20-regular",
	});
}

export default Component;
