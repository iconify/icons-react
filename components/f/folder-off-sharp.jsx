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
		"content": `<style>.w73jsacqt {
  fill: currentColor;
  d: path("M21 18.175L7.85 5h1.427l2 2H21zm-.198 4.048L17.579 19H3V5h2l1.616 1.616H5.2L2.546 3.962l.708-.708l18.262 18.262z");
}
</style><path class="w73jsacqt"/>`,
		"fallback": "material-symbols-light:folder-off-sharp",
	});
}

export default Component;
