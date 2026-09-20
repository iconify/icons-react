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
		"content": `<style>.sdavhzbyv {
  fill: currentColor;
  d: path("M4 22V6h12v16l-6-3zm14-4V4H7V2h13v16z");
}
</style><path class="sdavhzbyv"/>`,
		"fallback": "material-symbols:bookmarks-sharp",
	});
}

export default Component;
