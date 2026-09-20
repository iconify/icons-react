import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h97coz9-m {
  fill: var(--svg-color--fff, #fff);
  d: path("M28 8h4v20h-4zm-6 4h4v16h-4zm-6 4h4v12h-4zm-6 4h4v8h-4zm-6 4h4v4H4z");
}

.pvuhr2fye {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4z");
}
</style><path class="pvuhr2fye"/><path class="h97coz9-m"/>`,
		"fallback": "twemoji:antenna-bars",
	});
}

export default Component;
