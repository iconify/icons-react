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
		"content": `<style>.i4cmjobck {
  fill: currentColor;
  d: path("M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634zm-.573-1.492l5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653z");
}
</style><path class="i4cmjobck"/>`,
		"fallback": "fluent:caret-right-24-regular",
	});
}

export default Component;
