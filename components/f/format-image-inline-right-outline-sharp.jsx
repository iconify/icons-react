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
		"content": `<style>.kkhc2ccql {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm7.5-3.75v-8.5H20v8.5zm1-1H19v-6.5h-6.5zM4 5V4h16v1zm0 11.25v-1h4.73v1zM15.75 12");
}
</style><path class="kkhc2ccql"/>`,
		"fallback": "material-symbols-light:format-image-inline-right-outline-sharp",
	});
}

export default Component;
