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
		"content": `<style>.mh655obmw {
  fill: currentColor;
  d: path("M11.5 13.5h5v-2h-5zM10 15v-5h8v5zm-8 5V4h20v16zm2-2h16V8H4z");
}
</style><path class="mh655obmw"/>`,
		"fallback": "material-symbols:iframe-outline-sharp",
	});
}

export default Component;
