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
		"content": `<style>.stf5hji7u {
  fill: currentColor;
  d: path("M9.725 14L12 12.625L14.275 14l-.6-2.6l2-1.725l-2.625-.225L12 7l-1.05 2.45l-2.625.225l2 1.725zM5 21V3h14v18l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="stf5hji7u"/>`,
		"fallback": "material-symbols:bookmark-star-outline-sharp",
	});
}

export default Component;
