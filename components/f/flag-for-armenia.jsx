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
		"content": `<style>.aasuh4z9y {
  fill: var(--svg-color--f2a800, #f2a800);
  d: path("M0 44c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z");
}

.gof1x7nlj {
  fill: var(--svg-color--0033a0, #0033a0);
  d: path("M0 26h64v14H0z");
}

.wwxy0x3nb {
  fill: var(--svg-color--d90012, #d90012);
  d: path("M54 11H10C3.373 11 0 15.925 0 22v4h64v-4c0-6.075-3.373-11-10-11");
}
</style><path class="gof1x7nlj"/><path class="wwxy0x3nb"/><path class="aasuh4z9y"/>`,
		"fallback": "emojione-v1:flag-for-armenia",
	});
}

export default Component;
