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
		"content": `<style>.fohd6dqnc {
  fill: var(--svg-color--f9cb38, #f9cb38);
  d: path("M22 10h20v44H22z");
}

.jivigcjut {
  fill: var(--svg-color--009460, #009460);
  d: path("M54 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11");
}

.ri605c5ot {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z");
}
</style><path class="fohd6dqnc"/><path class="ri605c5ot"/><path class="jivigcjut"/>`,
		"fallback": "emojione-v1:flag-for-guinea",
	});
}

export default Component;
