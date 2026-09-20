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
		"content": `<style>.suby13yhh {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m9.958-3.8a.5.5 0 1 0-.916-.4l-3.5 8a.5.5 0 1 0 .916.4zM6.854 7.646a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.207 10l1.647-1.646a.5.5 0 0 0 0-.708m6.292.708L14.793 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708");
}
</style><path class="suby13yhh"/>`,
		"fallback": "fluent:code-circle-20-filled",
	});
}

export default Component;
