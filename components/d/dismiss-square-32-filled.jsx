import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwnpgbbzr {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zm-2.793 7.293a1 1 0 0 0-1.414 0L16 14.586l-4.293-4.293a1 1 0 1 0-1.414 1.414L14.586 16l-4.293 4.293a1 1 0 1 0 1.414 1.414L16 17.414l4.293 4.293a1 1 0 1 0 1.414-1.414L17.414 16l4.293-4.293a1 1 0 0 0 0-1.414");
}
</style><path class="fwnpgbbzr"/>`,
		"fallback": "fluent:dismiss-square-32-filled",
	});
}

export default Component;
