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
		"content": `<style>.tgyh9uwzz {
  fill: currentColor;
  d: path("M10.5 6.5a.5.5 0 0 0-1 0v5.793L6.853 9.646a.5.5 0 1 0-.707.708l3.5 3.5a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 1 0-.707-.708L10.5 12.293zM5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z");
}
</style><path class="tgyh9uwzz"/>`,
		"fallback": "fluent:arrow-square-down-20-regular",
	});
}

export default Component;
