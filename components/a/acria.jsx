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
		"content": `<style>.g_y-h6bce {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.313 11.156H7.78L12 4.406l5.344 9.563H8.906l-1.969 3.375h1.97l1.687-2.813h2.812l1.688 2.813h2.25l-1.688-2.813h2.25L21 19.594h-7.313L12 16.219l-1.687 3.375H3l4.5-7.875h6.187L12 8.344z");
}
</style><path class="g_y-h6bce"/>`,
		"fallback": "token-branded:acria",
	});
}

export default Component;
