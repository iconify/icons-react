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
		"content": `<style>.z-9phnb9x {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 13h2v-2h-2zm3 0h2V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM11 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13h5V7a2 2 0 0 1 2-2h1zm1 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.25 6.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 14.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75-2.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M15.5 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="z-9phnb9x"/>`,
		"fallback": "fluent:building-multiple-20-regular",
	});
}

export default Component;
