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
		"content": `<style>.z8uirzysi {
  fill: currentColor;
  d: path("M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8zm-3 3v-2h8v2z");
}
</style><path class="z8uirzysi"/>`,
		"fallback": "material-symbols:floor-lamp-sharp",
	});
}

export default Component;
