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
		"content": `<style>.wfd0q4bwf {
  fill: currentColor;
  d: path("M8 16h5v-5H8zm0-7h12V4H8zm7 7h5v-5h-5zm-9 2V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="wfd0q4bwf"/>`,
		"fallback": "material-symbols:backup-table-sharp",
	});
}

export default Component;
