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
		"content": `<style>.qf13ry0qp {
  fill: currentColor;
  d: path("M120 204H72a4 4 0 0 1 0-8h48a4 4 0 0 1 0 8m64-8h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m-24 32h-56a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m68-128a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 100m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 164h80a64.07 64.07 0 0 0 64-64");
}
</style><path class="qf13ry0qp"/>`,
		"fallback": "ph:cloud-fog-thin",
	});
}

export default Component;
