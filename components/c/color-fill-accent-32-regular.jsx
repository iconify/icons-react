import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x7mjnhb4d {
  fill: currentColor;
  d: path("M8.208 21.218a6 6 0 0 0 8.485 0L17.911 20h.723a4 4 0 0 0-.136 1a4.5 4.5 0 0 0 9 0q-.002-.09-.008-.177c.319.389.51.886.51 1.427v3.5A2.25 2.25 0 0 1 25.75 28H6.25A2.25 2.25 0 0 1 4 25.75v-3.5A2.25 2.25 0 0 1 6.25 20h.74z");
}
</style><path class="x7mjnhb4d"/>`,
		"fallback": "fluent:color-fill-accent-32-regular",
	});
}

export default Component;
