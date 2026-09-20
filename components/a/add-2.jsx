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
		"content": `<style>.y8i9nwwrp {
  fill: currentColor;
  d: path("M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z");
}
</style><path class="y8i9nwwrp"/>`,
		"fallback": "material-symbols:add-2",
	});
}

export default Component;
