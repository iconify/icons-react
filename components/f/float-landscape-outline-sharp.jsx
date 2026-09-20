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
		"content": `<style>.vi-tg0bdw {
  fill: currentColor;
  d: path("M2 20V4h20v7h-2V6H4v12h11v2Zm15 0v-7h5v7Zm-5-8Z");
}
</style><path class="vi-tg0bdw"/>`,
		"fallback": "material-symbols:float-landscape-outline-sharp",
	});
}

export default Component;
