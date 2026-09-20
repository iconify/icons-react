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
		"content": `<style>.iran0qhjf {
  fill: currentColor;
  d: path("M9 1v3.5A1.5 1.5 0 0 0 10.5 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H8.663A5.5 5.5 0 0 0 4 5.207V2.5A1.5 1.5 0 0 1 5.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zm0 9.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M7.854 8.646a.5.5 0 0 0-.708 0L4.5 11.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="iran0qhjf"/>`,
		"fallback": "fluent:document-checkmark-16-filled",
	});
}

export default Component;
