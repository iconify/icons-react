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
		"content": `<style>.h00ipn9-i {
  fill: currentColor;
  d: path("M19.833 21.26L7.346 8.773l-3.232 3.233L8.708 16.6L8 17.308L2.692 12l3.94-3.94l-3.891-3.893l.713-.713l17.092 17.092zm-1.773-6.012l-.714-.713l2.54-2.54L15.293 7.4L16 6.692L21.308 12z");
}
</style><path class="h00ipn9-i"/>`,
		"fallback": "material-symbols-light:code-off-outline",
	});
}

export default Component;
