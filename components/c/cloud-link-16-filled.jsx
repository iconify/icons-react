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
		"content": `<style>.yl1_ccbqk {
  fill: currentColor;
  d: path("M4.03 5.507a4 4 0 0 1 7.94 0a3.25 3.25 0 0 1 2.932 2.447A3.5 3.5 0 0 0 12.5 7h-4a3.5 3.5 0 0 0-3.163 5H4.25a3.25 3.25 0 0 1-.22-6.493M8.5 8a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zM12 8a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="yl1_ccbqk"/>`,
		"fallback": "fluent:cloud-link-16-filled",
	});
}

export default Component;
