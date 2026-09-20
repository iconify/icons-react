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
		"content": `<style>.uega-xbdx {
  fill: currentColor;
  d: path("M17.5 22.73v-3h-3v-1h3v-3h1v3h3v1h-3v3zm0-9.768V4.5h1v8.462zm-12 6.769V4.5h1v15.23zm6-12V4.5h1v3.23zm0 6V10.5h1v3.23zm0 6V16.5h1v3.23z");
}
</style><path class="uega-xbdx"/>`,
		"fallback": "material-symbols-light:add-road-outline-sharp",
	});
}

export default Component;
