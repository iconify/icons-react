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
		"content": `<style>.yplah_b3c {
  fill: currentColor;
  d: path("m20.475 23.3l-2.3-2.3H3V5.825L.7 3.5l1.4-1.4l19.8 19.8l-1.425 1.4ZM6 17h8.175l-2.325-2.325l-.85 1.05L9 13l-3 4Zm15 1.175L5.825 3H21v15.175Z");
}
</style><path class="yplah_b3c"/>`,
		"fallback": "material-symbols:image-not-supported-sharp",
	});
}

export default Component;
