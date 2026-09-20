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
		"content": `<style>.abe6--brr {
  fill: currentColor;
  d: path("M9 22v-6h6v6zm-7-7V9h6v6zm7 0V9h6v6zm7 0V9h6v6zm0-7V2h6v6z");
}
</style><path class="abe6--brr"/>`,
		"fallback": "material-symbols:crossword",
	});
}

export default Component;
