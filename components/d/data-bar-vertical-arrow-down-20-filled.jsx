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
		"content": `<style>.auxq6bchc {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v4.6a5.5 5.5 0 0 0-2.5-.6a5.5 5.5 0 0 0-1.5.207V5a2 2 0 0 1 2-2M9 14.5a5.5 5.5 0 0 1 3-4.9V8a2 2 0 1 0-4 0v7a2 2 0 0 0 1.577 1.955A5.5 5.5 0 0 1 9 14.5M5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m14 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z");
}
</style><path class="auxq6bchc"/>`,
		"fallback": "fluent:data-bar-vertical-arrow-down-20-filled",
	});
}

export default Component;
