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
		"content": `<style>.xi2t1w64w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.875 3.25h-1.25q-3.375 0-3.375 3.375v1.25q0 3.375 3.375 3.375h1.25q3.375 0 3.375-3.375v-1.25q0-3.375-3.375-3.375m8.25 0h1.25q3.375 0 3.375 3.375v1.25q0 3.375-3.375 3.375h-1.25q-3.375 0-3.375-3.375v-1.25q0-3.375 3.375-3.375m-8.25 9.5h-1.25q-3.375 0-3.375 3.375v1.25q0 3.375 3.375 3.375h1.25q3.375 0 3.375-3.375v-1.25q0-3.375-3.375-3.375m8.25 0h1.25q3.375 0 3.375 3.375v1.25q0 3.375-3.375 3.375h-1.25q-3.375 0-3.375-3.375v-1.25q0-3.375 3.375-3.375");
}
</style><path class="xi2t1w64w"/>`,
		"fallback": "uix-solid:confusion-matrix",
	});
}

export default Component;
