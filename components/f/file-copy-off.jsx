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
		"content": `<style>.y7e3qb7bw {
  fill: currentColor;
  d: path("m21 18.15l-15-15V3q0-.825.588-1.412T8 1h7l6 6zm-.5 5.15L16.2 19H8q-.825 0-1.412-.587T6 17V8.8L.7 3.5l1.4-1.4l19.8 19.8zM14 8h5.5L14 2.5L19.5 8L14 2.5zM4 23q-.825 0-1.412-.587T2 21V8h2v13h12v2z");
}
</style><path class="y7e3qb7bw"/>`,
		"fallback": "material-symbols:file-copy-off",
	});
}

export default Component;
