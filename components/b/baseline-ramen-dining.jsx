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
		"content": `<style>.c1vou1btt {
  fill: currentColor;
  d: path("M9 6H8V4.65l1-.12zm0 6H8V7h1zM6 7h1v5H6zm0-2.12l1-.12V6H6zM22 3V2L5 4v8H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10V7h12V6H10V4.41z");
}
</style><path class="c1vou1btt"/>`,
		"fallback": "ic:baseline-ramen-dining",
	});
}

export default Component;
