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
		"content": `<style>.thha-lb2s {
  fill: currentColor;
  d: path("M5 21V5q0-.825.588-1.412T7 3h7q-.5.75-.75 1.438T13 6q0 1.8 1.138 3.175T17 10.9q.575.075 1 .075t1-.075V21l-7-3zM17 9V7h-2V5h2V3h2v2h2v2h-2v2z");
}
</style><path class="thha-lb2s"/>`,
		"fallback": "material-symbols:bookmark-add",
	});
}

export default Component;
