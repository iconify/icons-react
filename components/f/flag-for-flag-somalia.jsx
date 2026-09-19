import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.brugaro6y {
  fill: var(--svg-color--4189dd, #4189dd);
  d: path("M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.xf2rp6v7v {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M44.939 27.04L35 27.06L31.916 17l-3.062 10.06l-9.946-.02l8.06 6.12l-3.122 9.99l8.09-6.204l8.09 6.204l-3.127-9.99z");
}
</style><path class="brugaro6y"/><path class="xf2rp6v7v"/>`,
		"fallback": "emojione-v1:flag-for-flag-somalia",
	});
}

export default Component;
