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
		"content": `<style>.fhu6l4bta {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-1h10v1zm0-3.75v-1h16v1zm0-3.75v-1h10v1zM4 5V4h16v1z");
}
</style><path class="fhu6l4bta"/>`,
		"fallback": "material-symbols-light:format-align-left-outline-sharp",
	});
}

export default Component;
