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
		"content": `<style>.a3nombb-i {
  fill: currentColor;
  d: path("M9.713 1.963a3.25 3.25 0 0 1 4.596 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.596zm3.535 1.06a1.75 1.75 0 0 0-2.474 0l-7.75 7.75a1.75 1.75 0 0 0 0 2.476l7.75 7.75a1.75 1.75 0 0 0 2.474 0l7.75-7.75a1.75 1.75 0 0 0 0-2.476zM12.72 6.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 1 1-1.06-1.06L13.94 10h-2.19A1.75 1.75 0 0 0 10 11.75v4a.75.75 0 0 1-1.5 0v-4a3.25 3.25 0 0 1 3.25-3.25h2.19l-1.22-1.22a.75.75 0 0 1 0-1.06");
}
</style><path class="a3nombb-i"/>`,
		"fallback": "fluent:directions-24-regular",
	});
}

export default Component;
