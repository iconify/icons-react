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
		"content": `<style>.bsn33vb6g {
  fill: currentColor;
  d: path("M10 13.077L14.616 10L10 6.923zm-7 7V3h18v14H6.077z");
}
</style><path class="bsn33vb6g"/>`,
		"fallback": "material-symbols-light:auto-read-play-sharp",
	});
}

export default Component;
