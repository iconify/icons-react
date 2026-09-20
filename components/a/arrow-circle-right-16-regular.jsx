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
		"content": `<style>.tug4wjebt {
  fill: currentColor;
  d: path("m8.854 10.854l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12");
}
</style><path class="tug4wjebt"/>`,
		"fallback": "fluent:arrow-circle-right-16-regular",
	});
}

export default Component;
