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
		"content": `<style>.ld0083bul {
  fill: currentColor;
  d: path("M5.993 2.853a.75.75 0 0 0-1.486-.205l-2 14.5a.75.75 0 1 0 1.486.204zm9.5-.205a.75.75 0 0 0-1.486.205l2 14.5a.75.75 0 0 0 1.486-.205zm-4.743.102a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="ld0083bul"/>`,
		"fallback": "fluent:highway-20-filled",
	});
}

export default Component;
