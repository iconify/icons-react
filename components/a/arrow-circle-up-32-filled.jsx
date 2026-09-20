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
		"content": `<style>.lji6jilsm {
  fill: currentColor;
  d: path("M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14M9.293 16.707a1 1 0 0 0 1.414 0L15 12.414V22a1 1 0 1 0 2 0v-9.586l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414");
}
</style><path class="lji6jilsm"/>`,
		"fallback": "fluent:arrow-circle-up-32-filled",
	});
}

export default Component;
