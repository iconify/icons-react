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
		"content": `<style>.t-0cpjiyd {
  fill: currentColor;
  d: path("M8.5 8.5H6.25a1.75 1.75 0 0 0-1.75 1.75v7.5c0 .966.784 1.75 1.75 1.75h5c.882 0 1.61-.652 1.73-1.5h1.51a3.25 3.25 0 0 1-3.24 3h-5A3.25 3.25 0 0 1 3 17.75v-7.5A3.25 3.25 0 0 1 6.25 7H8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25v7.5A3.25 3.25 0 0 1 17.75 17h-5a3.25 3.25 0 0 1-3.25-3.25v-7.5A3.25 3.25 0 0 1 12.75 3zm-5 1.5A1.75 1.75 0 0 0 11 6.25v7.5c0 .966.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="t-0cpjiyd"/>`,
		"fallback": "fluent:copy-24-regular",
	});
}

export default Component;
