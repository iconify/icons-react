import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fnic__bjf {
  fill: currentColor;
  d: path("M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z");
}
</style><path class="fnic__bjf"/>`,
		"fallback": "ph:currency-rub",
	});
}

export default Component;
