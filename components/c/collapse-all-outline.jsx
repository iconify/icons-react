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
		"content": `<style>.lw3uh_9rt {
  fill: currentColor;
  d: path("m7.4 21.308l-.708-.708L12 15.292l5.308 5.308l-.708.708l-4.6-4.6zm4.6-12.6L6.692 3.4l.708-.708l4.6 4.6l4.6-4.6l.708.708z");
}
</style><path class="lw3uh_9rt"/>`,
		"fallback": "material-symbols-light:collapse-all-outline",
	});
}

export default Component;
