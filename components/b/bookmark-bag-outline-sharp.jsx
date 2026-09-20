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
		"content": `<style>.difn-_bsq {
  fill: currentColor;
  d: path("M9 14h1v1h1.5v-1h1v1H14v-1h1V8h-1.5V6h-3v2H9zm2.5-6V7h1v1zM5 21V3h14v18l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="difn-_bsq"/>`,
		"fallback": "material-symbols:bookmark-bag-outline-sharp",
	});
}

export default Component;
