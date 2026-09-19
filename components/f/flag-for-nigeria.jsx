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
		"content": `<style>.m__a8sjkq {
  fill: var(--svg-color--128807, #128807);
  d: path("M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10zm44 0H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11");
}

.zzyf9-41q {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M22 10h20v44H22z");
}
</style><path class="zzyf9-41q"/><path class="m__a8sjkq"/>`,
		"fallback": "emojione-v1:flag-for-nigeria",
	});
}

export default Component;
