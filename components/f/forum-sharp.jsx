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
		"content": `<style>.a1om-ybpb {
  fill: currentColor;
  d: path("M6.462 16.23v-1.768h12.384V6h1.77v13.308l-3.078-3.077zm-3.077-.691V3h13.461v9.462H6.462z");
}
</style><path class="a1om-ybpb"/>`,
		"fallback": "material-symbols-light:forum-sharp",
	});
}

export default Component;
