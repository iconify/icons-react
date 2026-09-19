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
		"content": `<style>.eddw47b3i {
  fill: var(--svg-color--972f37, #972f37);
  d: path("M54 10H10C3.373 10 0 14.925 0 21v6h64v-6c0-6.075-3.373-11-10-11M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-6H0z");
}

.v75_3fwkw {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 27h64v10H0z");
}
</style><path class="v75_3fwkw"/><path class="eddw47b3i"/>`,
		"fallback": "emojione-v1:flag-for-flag-latvia",
	});
}

export default Component;
