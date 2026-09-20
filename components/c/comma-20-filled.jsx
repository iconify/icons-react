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
		"content": `<style>.iep-debls {
  fill: currentColor;
  d: path("M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12");
}
</style><path class="iep-debls"/>`,
		"fallback": "fluent:comma-20-filled",
	});
}

export default Component;
