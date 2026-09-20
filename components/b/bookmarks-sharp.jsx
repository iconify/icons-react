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
		"content": `<style>.rqa_97bdz {
  fill: currentColor;
  d: path("M5 21V6.846h10.289V21l-5.145-2.654zm13-3.558V4H7.789V3H19v14.442z");
}
</style><path class="rqa_97bdz"/>`,
		"fallback": "material-symbols-light:bookmarks-sharp",
	});
}

export default Component;
