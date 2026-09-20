import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sgy34zb_r {
  fill: currentColor;
  d: path("M38.378 6.71a1.25 1.25 0 0 0-1.608-.614l-12 5a1.25 1.25 0 1 0 .961 2.308l9.483-3.951L23 39.273L10.407 8.525a1.25 1.25 0 0 0-2.313.948l12.824 31.31c.763 1.864 3.401 1.864 4.164 0l12.374-30.207l4.167 8.713a1.25 1.25 0 1 0 2.255-1.08z");
}
</style><path class="sgy34zb_r"/>`,
		"fallback": "fluent:arrow-turn-down-up-48-regular",
	});
}

export default Component;
