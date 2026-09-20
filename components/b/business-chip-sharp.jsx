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
		"content": `<style>.dcggcebuy {
  fill: currentColor;
  d: path("M8 16h8v-6h-2V8h-4v2H8zm3-6V9h2v1zm-3 9q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19z");
}
</style><path class="dcggcebuy"/>`,
		"fallback": "material-symbols:business-chip-sharp",
	});
}

export default Component;
