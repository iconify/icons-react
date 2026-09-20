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
		"content": `<style>.gkpvchb-b {
  fill: currentColor;
  d: path("m12 15l-5-5h10z");
}
</style><path class="gkpvchb-b"/>`,
		"fallback": "material-symbols:arrow-drop-down-outline",
	});
}

export default Component;
