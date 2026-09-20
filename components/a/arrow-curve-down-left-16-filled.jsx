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
		"content": `<style>.hzu00ca8b {
  fill: currentColor;
  d: path("M11.151 1.378a.75.75 0 0 1-.279 1.023C8.458 3.781 8.25 6.03 8.25 8.001v4.438l2.22-2.22a.75.75 0 1 1 1.06 1.061l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V8c0-2.029.192-5.08 3.378-6.901a.75.75 0 0 1 1.023.279");
}
</style><path class="hzu00ca8b"/>`,
		"fallback": "fluent:arrow-curve-down-left-16-filled",
	});
}

export default Component;
