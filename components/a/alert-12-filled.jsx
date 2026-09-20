import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mdjgd474s {
  fill: currentColor;
  d: path("M6 1a4 4 0 0 0-4 4v1.382l-.947 1.894A.5.5 0 0 0 1.5 9h9a.5.5 0 0 0 .447-.724L10 6.382V5a4 4 0 0 0-4-4m0 10.5A2 2 0 0 1 4.063 10h3.874A2 2 0 0 1 6 11.5");
}
</style><path class="mdjgd474s"/>`,
		"fallback": "fluent:alert-12-filled",
	});
}

export default Component;
