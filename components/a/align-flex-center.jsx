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
		"content": `<style>.okyyh3bbp {
  fill: currentColor;
  d: path("M11.692 21v-8H3.5v-2h8.192V3h1v8H20.5v2h-7.808v8z");
}
</style><path class="okyyh3bbp"/>`,
		"fallback": "material-symbols-light:align-flex-center",
	});
}

export default Component;
