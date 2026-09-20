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
		"content": `<style>.qm9tasved {
  fill: currentColor;
  d: path("m10.85 15.864l4.938-4.964l-.688-.688l-4.25 4.23l-2.125-2.105l-.713.713zM3 19V5h6.596l2 2H21v12z");
}
</style><path class="qm9tasved"/>`,
		"fallback": "material-symbols-light:folder-check-sharp",
	});
}

export default Component;
