import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cmusc2b_n {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1.5A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h8a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 14 4.5z");
}
</style><path class="cmusc2b_n"/>`,
		"fallback": "fluent:border-outside-thick-20-regular",
	});
}

export default Component;
