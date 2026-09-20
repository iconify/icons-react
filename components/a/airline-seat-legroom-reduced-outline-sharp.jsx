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
		"content": `<style>.py6bq6b5d {
  fill: currentColor;
  d: path("M14 21v-3l1-4H6V3h6v6h6.25l.95 1.275L17 18h3v3zm-2-4H3V3h2v12h7z");
}
</style><path class="py6bq6b5d"/>`,
		"fallback": "material-symbols:airline-seat-legroom-reduced-outline-sharp",
	});
}

export default Component;
