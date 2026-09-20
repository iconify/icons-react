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
		"content": `<style>.p7vsbhs2e {
  fill: currentColor;
  d: path("M11 5v14a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0");
}
</style><path class="p7vsbhs2e"/>`,
		"fallback": "fluent:divider-short-24-filled",
	});
}

export default Component;
