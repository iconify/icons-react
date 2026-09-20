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
		"content": `<style>.p9yo-kb1b {
  fill: currentColor;
  d: path("M6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm0 1h3v2H6zm-1 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm8 10V4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm3 0a2 2 0 0 0 2-2v-1h-4v3zm2-9V6a2 2 0 0 0-2-2h-2v3zm0 5V8h-4v4z");
}
</style><path class="p9yo-kb1b"/>`,
		"fallback": "fluent:content-view-gallery-20-regular",
	});
}

export default Component;
