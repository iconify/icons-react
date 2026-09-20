import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.una344b8v {
  fill: currentColor;
  d: path("M6 10a.5.5 0 0 1 .5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10m4 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-1a7 7 0 1 1 0-14a7 7 0 0 1 0 14");
}
</style><path class="una344b8v"/>`,
		"fallback": "fluent:add-circle-20-regular",
	});
}

export default Component;
