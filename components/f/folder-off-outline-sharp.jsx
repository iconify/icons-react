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
		"content": `<style>.c0s6aqbvl {
  fill: currentColor;
  d: path("m21 18.175l-1-1V8h-9.15l-2-2l-1-1h1.427l2 2H21zm-.198 4.048L17.579 19H3V5h2l1 1H4v12h12.579L2.546 3.962l.708-.708l18.262 18.262zm-6.377-10.648");
}
</style><path class="c0s6aqbvl"/>`,
		"fallback": "material-symbols-light:folder-off-outline-sharp",
	});
}

export default Component;
