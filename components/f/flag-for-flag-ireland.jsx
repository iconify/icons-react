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
		"content": `<style>.gq4nsy2sh {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z");
}

.wr7djrcrn {
  fill: var(--svg-color--f7941e, #f7941e);
  d: path("M54 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11");
}

.zzyf9-41q {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M22 10h20v44H22z");
}
</style><path class="zzyf9-41q"/><path class="gq4nsy2sh"/><path class="wr7djrcrn"/>`,
		"fallback": "emojione-v1:flag-for-flag-ireland",
	});
}

export default Component;
