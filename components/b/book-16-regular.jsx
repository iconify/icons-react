import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ertdx85st {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 1h4v1H6zm5-3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1v-.003h8.5a.5.5 0 0 0 .5-.5V3a2 2 0 0 0-2-2M4 11.997V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8.997z");
}
</style><path class="ertdx85st"/>`,
		"fallback": "fluent:book-16-regular",
	});
}

export default Component;
