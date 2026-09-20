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
		"content": `<style>.o89ngfb9v {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v2H11.175l-2-2H4v12l2.4-8h17.1l-3 10zm4.1-2H19l1.8-6H7.9zm0 0l1.8-6zM4 8V6z");
}
</style><path class="o89ngfb9v"/>`,
		"fallback": "material-symbols:folder-open-outline-sharp",
	});
}

export default Component;
