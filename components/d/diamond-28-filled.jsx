import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pdxeg-bwl {
  fill: currentColor;
  d: path("M11.35 2.099a3.75 3.75 0 0 1 5.303 0l9.25 9.251a3.75 3.75 0 0 1 0 5.303l-9.25 9.25a3.75 3.75 0 0 1-5.304 0l-9.25-9.25a3.75 3.75 0 0 1 0-5.303z");
}
</style><path class="pdxeg-bwl"/>`,
		"fallback": "fluent:diamond-28-filled",
	});
}

export default Component;
