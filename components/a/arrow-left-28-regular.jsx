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
		"content": `<style>.n_r7cmbhj {
  fill: currentColor;
  d: path("M12.735 4.21a.75.75 0 0 1 1.04 1.08L5.5 13.25h18.753a.75.75 0 0 1 0 1.5H5.501l8.274 7.959a.75.75 0 0 1-1.04 1.08L3.307 14.72a1 1 0 0 1 0-1.441z");
}
</style><path class="n_r7cmbhj"/>`,
		"fallback": "fluent:arrow-left-28-regular",
	});
}

export default Component;
