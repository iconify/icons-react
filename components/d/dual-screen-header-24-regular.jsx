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
		"content": `<style>.n0n_a-xmu {
  fill: currentColor;
  d: path("m12.748 4.002l-.001.002h7.498c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zM20.495 7h-7.748v11.5h7.498a.25.25 0 0 0 .25-.25zm-9.248 0H3.5v11.247c0 .138.112.25.25.25h7.498z");
}
</style><path class="n0n_a-xmu"/>`,
		"fallback": "fluent:dual-screen-header-24-regular",
	});
}

export default Component;
