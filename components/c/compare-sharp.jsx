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
		"content": `<style>.edzctfb7d {
  fill: currentColor;
  d: path("M11 22.23V20H4V4h7V1.77h1v20.46zM5 18h6v-7.192zm9 2v-8l5 6V5h-5V4h6v16z");
}
</style><path class="edzctfb7d"/>`,
		"fallback": "material-symbols-light:compare-sharp",
	});
}

export default Component;
