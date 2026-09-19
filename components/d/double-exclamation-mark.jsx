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
		"content": `<style>.gi-hzfeaf {
  d: path("M51 42.4H41L37 2h18z");
}

.ic-371bqb {
  fill: var(--svg-color--ff5a79, #ff5a79);
}

.mxt0mtbff {
  cx: 18px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}

.xt-ltvbde {
  cx: 46px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}

.z64x-nlre {
  d: path("M23 42.4H13L9 2h18z");
}
</style><g class="ic-371bqb"><path class="z64x-nlre"/><ellipse class="mxt0mtbff"/><path class="gi-hzfeaf"/><ellipse class="xt-ltvbde"/></g>`,
		"fallback": "emojione:double-exclamation-mark",
	});
}

export default Component;
