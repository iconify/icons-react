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
		"content": `<style>.l7d96ccrd {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.085a1.5 1.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm1 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v2h1.5a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1H9v-2H7a2 2 0 0 1-2-2zm5 10h3v-2h-3zm6-3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z");
}
</style><path class="l7d96ccrd"/>`,
		"fallback": "fluent:desktop-tower-20-regular",
	});
}

export default Component;
