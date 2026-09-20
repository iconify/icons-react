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
		"content": `<style>.jy94fv_4g {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m3.5 7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1z");
}
</style><path class="jy94fv_4g"/>`,
		"fallback": "fluent:equal-circle-20-filled",
	});
}

export default Component;
