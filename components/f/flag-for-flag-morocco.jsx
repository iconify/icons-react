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
		"content": `<style>.fxkdkw-cw {
  fill: var(--svg-color--4f682e, #4f682e);
  d: path("m23.3 44l3.3-9.9l-8.6-6.2h10.7L32 18l3.3 9.9H46L37.3 34l3.3 9.9l-8.6-6zm10.5-7.4l2.7 1.9l-1-3.1zm-5.3-1.2l-1 3.1l2.7-1.9zm.7-2.1l2.8 2l2.8-2l-1.1-3.2h-3.5zm-4.5-3.2l2.7 1.9l.6-1.9zM36.6 32l2.7-1.9H36zM31 27.9h2l-1-3.1z");
}

.ov_j9rzim {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--f42f4c, #f42f4c);
}
</style><circle class="ov_j9rzim"/><path class="fxkdkw-cw"/>`,
		"fallback": "emojione:flag-for-flag-morocco",
	});
}

export default Component;
