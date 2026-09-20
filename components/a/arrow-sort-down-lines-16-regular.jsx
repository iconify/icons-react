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
		"content": `<style>.ep6m4wbhe {
  fill: currentColor;
  d: path("M13 1.5a.5.5 0 0 0-1 0v11.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L13 13.293zM2.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM6 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5");
}
</style><path class="ep6m4wbhe"/>`,
		"fallback": "fluent:arrow-sort-down-lines-16-regular",
	});
}

export default Component;
