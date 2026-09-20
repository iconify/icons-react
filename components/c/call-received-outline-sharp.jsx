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
		"content": `<style>.rku_ynb0t {
  fill: currentColor;
  d: path("M6 18V9h1v7.292L18.292 5l.708.708L7.708 17H15v1z");
}
</style><path class="rku_ynb0t"/>`,
		"fallback": "material-symbols-light:call-received-outline-sharp",
	});
}

export default Component;
