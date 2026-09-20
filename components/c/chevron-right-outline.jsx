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
		"content": `<style>.t0x2xlaud {
  fill: currentColor;
  d: path("m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z");
}
</style><path class="t0x2xlaud"/>`,
		"fallback": "material-symbols-light:chevron-right-outline",
	});
}

export default Component;
