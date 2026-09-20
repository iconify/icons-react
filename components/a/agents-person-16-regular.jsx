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
		"content": `<style>.p3t9wcbfy {
  fill: currentColor;
  d: path("M14.5 11a1.5 1.5 0 0 1 1.5 1.5c0 1.245-1 2.5-3.5 2.5S9 13.75 9 12.5a1.5 1.5 0 0 1 1.5-1.5zm-7-9a.5.5 0 0 1 0 1H5.103a.5.5 0 0 0-.433.25l-2.6 4.5a.5.5 0 0 0 0 .5l2.504 4.337a.827.827 0 0 0 1.505-.165l2.889-9.146a1.827 1.827 0 0 1 3.323-.363l1.331 2.305a3 3 0 0 0-1.28-.214l-.917-1.59a.826.826 0 0 0-1.503.163l-2.89 9.147a1.827 1.827 0 0 1-3.324.363L1.205 8.75a1.5 1.5 0 0 1 0-1.5l2.598-4.5A1.5 1.5 0 0 1 5.102 2zm5 4a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="p3t9wcbfy"/>`,
		"fallback": "fluent:agents-person-16-regular",
	});
}

export default Component;
