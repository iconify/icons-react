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
		"content": `<style>.hhwxe54iq {
  fill: currentColor;
  d: path("m12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14zm-9 3V5.8L5.3 3h13.4L21 5.8V21zM5.4 6h13.2l-.85-1H6.25z");
}
</style><path class="hhwxe54iq"/>`,
		"fallback": "material-symbols:archive-sharp",
	});
}

export default Component;
