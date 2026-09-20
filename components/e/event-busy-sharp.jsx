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
		"content": `<style>.f962htb2z {
  fill: currentColor;
  d: path("m9.7 18.7l-1.4-1.4l2.3-2.3l-2.3-2.3l1.4-1.4l2.3 2.3l2.3-2.3l1.4 1.4l-2.3 2.3l2.3 2.3l-1.4 1.4l-2.3-2.3zM3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z");
}
</style><path class="f962htb2z"/>`,
		"fallback": "material-symbols:event-busy-sharp",
	});
}

export default Component;
