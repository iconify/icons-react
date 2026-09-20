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
		"content": `<style>.c5qk1gqvw {
  fill: currentColor;
  d: path("m12 21l-5-9.02L12 3l5 8.98z");
}
</style><path class="c5qk1gqvw"/>`,
		"fallback": "material-symbols-light:hov-sharp",
	});
}

export default Component;
