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
		"content": `<style>.p7vhx9bvw {
  fill: currentColor;
  d: path("M8 2a.75.75 0 0 1 .75.75v8.787l2.941-3.287a.75.75 0 1 1 1.118 1L8.559 14a.75.75 0 0 1-1.118 0l-4.25-4.75a.75.75 0 1 1 1.118-1l2.941 3.287V2.75A.75.75 0 0 1 8 2");
}
</style><path class="p7vhx9bvw"/>`,
		"fallback": "fluent:arrow-down-16-filled",
	});
}

export default Component;
