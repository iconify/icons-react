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
		"content": `<style>.bsqj7w-ln {
  fill: currentColor;
  d: path("M4 22V6h12v16l-6-3zm2-3.025l4-2.15l4 2.15V8H6zM18 18V4H7V2h13v16zM6 8h8z");
}
</style><path class="bsqj7w-ln"/>`,
		"fallback": "material-symbols:bookmarks-outline-sharp",
	});
}

export default Component;
