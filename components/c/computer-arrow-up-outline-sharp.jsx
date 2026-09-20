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
		"content": `<style>.s5b9jhb8r {
  fill: currentColor;
  d: path("M11.48 14.27h1V9.574l2.12 2.114l.708-.708l-3.327-3.327l-3.289 3.288l.708.714l2.08-2.081zm-9.71 5.192v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11z");
}
</style><path class="s5b9jhb8r"/>`,
		"fallback": "material-symbols-light:computer-arrow-up-outline-sharp",
	});
}

export default Component;
