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
		"content": `<style>.gespisn5c {
  fill: currentColor;
  d: path("M9.539 13V8h10.923v5zm-6 2.77v-1h16.923v1zm.605-3.376q-.605-.606-.605-1.51q0-.903.605-1.509t1.51-.606t1.51.606t.605 1.51t-.605 1.51t-1.51.605t-1.51-.606");
}
</style><path class="gespisn5c"/>`,
		"fallback": "material-symbols-light:airline-seat-flat-sharp",
	});
}

export default Component;
