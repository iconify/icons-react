import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":415};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iyqr0zlwm {
  d: path("M0 89.613h47.999v235.196H0zM104.025 0h47.999v179.196h-47.999z");
}

.nw7uzr-xr {
  fill: var(--svg-color--31d891, #31d891);
  d: path("M104.025 235.229h47.999v179.196h-47.999zM208.001 89.613H256v235.196h-47.999z");
}
</style><path class="iyqr0zlwm"/><path class="nw7uzr-xr"/>`,
		"fallback": "logos:heap-icon",
	});
}

export default Component;
