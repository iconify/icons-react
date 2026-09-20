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
		"content": `<style>.cbfd5q7zl {
  fill: currentColor;
  d: path("M7 18h3v-4h1V9.5H6V14h1zm2.388-9.862q.362-.363.362-.888t-.363-.888T8.5 6t-.888.363t-.362.887t.363.888t.887.362t.888-.363M13 11h5l-2.5-4zm2.5 6l2.5-4h-5zM3 21V3h18v18z");
}
</style><path class="cbfd5q7zl"/>`,
		"fallback": "material-symbols:elevator-sharp",
	});
}

export default Component;
