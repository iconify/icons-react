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
		"content": `<style>.ejvvuibyg {
  fill: currentColor;
  d: path("M25.5 20a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5v-2a3.5 3.5 0 0 1 2.64-3.395l-.076.332a2.5 2.5 0 0 0 2.999 2.999l5.94-1.37a4.5 4.5 0 0 0 2.17-1.204l.863-.862z");
}
</style><path class="ejvvuibyg"/>`,
		"fallback": "fluent:color-line-accent-32-light",
	});
}

export default Component;
