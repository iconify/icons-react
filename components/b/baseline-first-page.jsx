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
		"content": `<style>.n-4zjnb4k {
  fill: currentColor;
  d: path("M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z");
}
</style><path class="n-4zjnb4k"/>`,
		"fallback": "ic:baseline-first-page",
	});
}

export default Component;
