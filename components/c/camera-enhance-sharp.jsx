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
		"content": `<style>.i7ih241lx {
  fill: currentColor;
  d: path("M12 17.5q1.875 0 3.188-1.313T16.5 13q0-1.875-1.313-3.188T12 8.5q-1.875 0-3.188 1.313T7.5 13q0 1.875 1.313 3.188T12 17.5Zm0-1l-1.1-2.4L8.5 13l2.4-1.1L12 9.5l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4ZM2 21V5h5.15L9 3h6l1.85 2H22v16H2Z");
}
</style><path class="i7ih241lx"/>`,
		"fallback": "material-symbols:camera-enhance-sharp",
	});
}

export default Component;
