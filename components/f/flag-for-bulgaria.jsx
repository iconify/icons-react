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
		"content": `<style>.o_gjz8qww {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M0 25h64v14H0z");
}

.qnxn34bwt {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M54 10H10C3.373 10 0 14.925 0 21v4h64v-4c0-6.075-3.373-11-10-11");
}

.smx0ezbgg {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z");
}
</style><path class="o_gjz8qww"/><path class="qnxn34bwt"/><path class="smx0ezbgg"/>`,
		"fallback": "emojione-v1:flag-for-bulgaria",
	});
}

export default Component;
