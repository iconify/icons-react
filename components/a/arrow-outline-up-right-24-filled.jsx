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
		"content": `<style>.ro4z3fjzw {
  fill: currentColor;
  d: path("M19.833 2.012a1.95 1.95 0 0 1 2.153 2.154l-1.34 12.061c-.18 1.625-2.161 2.32-3.317 1.164l-1.267-1.267l-5.304 5.303a1.95 1.95 0 0 1-2.758 0l-5.429-5.429a1.95 1.95 0 0 1 0-2.758l5.304-5.303l-1.268-1.268c-1.156-1.156-.461-3.136 1.164-3.317z");
}
</style><path class="ro4z3fjzw"/>`,
		"fallback": "fluent:arrow-outline-up-right-24-filled",
	});
}

export default Component;
