import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zrv643bin {
  fill: currentColor;
  d: path("M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H8.682a5.02 5.02 0 0 0 2.503-2.75h.065a1.75 1.75 0 1 0 0-3.5h-.065a5 5 0 0 0-2.935-2.935v-.065a1.75 1.75 0 1 0-3.5 0v.065a5 5 0 0 0-.75.354V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM7.25 12.75a.75.75 0 0 0-1.5 0v.566a4.25 4.25 0 0 0-3.434 3.434H1.75a.75.75 0 0 0 0 1.5h.566a4.25 4.25 0 0 0 3.434 3.434v.566a.75.75 0 0 0 1.5 0v-.566a4.25 4.25 0 0 0 3.434-3.434h.566a.75.75 0 0 0 0-1.5h-.566a4.25 4.25 0 0 0-3.434-3.434zm-3.5 4.75a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m4 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0");
}
</style><path class="zrv643bin"/>`,
		"fallback": "fluent:document-target-24-filled",
	});
}

export default Component;
