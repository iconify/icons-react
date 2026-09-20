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
		"content": `<style>.wjxy9ukcl {
  fill: currentColor;
  d: path("M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M9.293 15.293a1 1 0 0 1 1.414 0L15 19.586V10a1 1 0 1 1 2 0v9.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414");
}
</style><path class="wjxy9ukcl"/>`,
		"fallback": "fluent:arrow-circle-down-32-filled",
	});
}

export default Component;
