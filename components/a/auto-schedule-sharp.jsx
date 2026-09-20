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
		"content": `<style>.sb2va1b4w {
  fill: currentColor;
  d: path("m12 19l-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25L12 19Zm-9 3V4h3V2h2v2h8V2h2v2h3v18H3Zm2-2h14V10H5v10Z");
}
</style><path class="sb2va1b4w"/>`,
		"fallback": "material-symbols:auto-schedule-sharp",
	});
}

export default Component;
