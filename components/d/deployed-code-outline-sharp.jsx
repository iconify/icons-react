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
		"content": `<style>.r-ul-fgei {
  fill: currentColor;
  d: path("M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zm-1-8.575l5.925-3.425L12 4L6.075 7.425zm-9 6.275V6.875L12 1.7l9 5.175v10.25L12 22.3zM12 12");
}
</style><path class="r-ul-fgei"/>`,
		"fallback": "material-symbols:deployed-code-outline-sharp",
	});
}

export default Component;
