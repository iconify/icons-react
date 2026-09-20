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
		"content": `<style>.woqldbc0q {
  fill: currentColor;
  d: path("M11 1a8 8 0 1 1-.589 15.979a5.5 5.5 0 0 0-7.39-7.39A8 8 0 0 1 11 1m-.5 3a.5.5 0 0 0-.5.5v5l.008.09a.5.5 0 0 0 .492.41h3l.09-.008A.5.5 0 0 0 13.5 9H11V4.5l-.008-.09A.5.5 0 0 0 10.5 4M10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M4 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m3 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5");
}
</style><path class="woqldbc0q"/>`,
		"fallback": "fluent:clock-pause-20-filled",
	});
}

export default Component;
