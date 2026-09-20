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
		"content": `<style>.g2z2vcbwf {
  fill: currentColor;
  d: path("M4 21v-6h16v6h-2v-4H6v4zm-1-7v-3h3v3zm4 0V3h10v11zm11 0v-3h3v3z");
}
</style><path class="g2z2vcbwf"/>`,
		"fallback": "material-symbols:event-seat-sharp",
	});
}

export default Component;
