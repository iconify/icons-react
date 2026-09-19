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
		"content": `<style>.gjp-xhbgq {
  fill: var(--svg-color--28a3ce, #28a3ce);
  d: path("M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z");
}

.t76_qd-2z {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 25h64v14H0z");
}

.xmwf8-bmx {
  fill: var(--svg-color--c32129, #c32129);
  d: path("M54 10H10C3.373 10 0 14.925 0 21v4h64v-4c0-6.075-3.373-11-10-11");
}
</style><path class="t76_qd-2z"/><path class="xmwf8-bmx"/><path class="gjp-xhbgq"/>`,
		"fallback": "emojione-v1:flag-for-flag-luxembourg",
	});
}

export default Component;
