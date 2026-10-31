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
		"content": `<style>.y17k_toyi {
  fill: currentColor;
  d: path("M8.5 13.75A4.25 4.25 0 0 0 12.75 18h1.75v.75A3.25 3.25 0 0 1 11.25 22h-6A3.25 3.25 0 0 1 2 18.75v-8.5A3.25 3.25 0 0 1 5.25 7H8.5zM18.75 2A3.25 3.25 0 0 1 22 5.25v8.5A3.25 3.25 0 0 1 18.75 17h-6a3.25 3.25 0 0 1-3.25-3.25v-8.5A3.25 3.25 0 0 1 12.75 2z");
}
</style><path class="y17k_toyi"/>`,
		"fallback": "fluent:copy-24-filled",
	});
}

export default Component;
