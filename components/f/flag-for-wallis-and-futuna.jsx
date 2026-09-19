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
		"content": `<style>.ogqvplbhf {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M22 11h20v44H22z");
}

.qc154fbkh {
  fill: var(--svg-color--00209f, #00209f);
  d: path("M10 11C3.373 11 0 15.925 0 22v22c0 6.075 3.373 11 10 11h12V11z");
}

.vz8ht_bvx {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M54 11H42v44h12c6.627 0 10-4.925 10-11V22c0-6.075-3.373-11-10-11");
}
</style><path class="ogqvplbhf"/><path class="qc154fbkh"/><path class="vz8ht_bvx"/>`,
		"fallback": "emojione-v1:flag-for-wallis-and-futuna",
	});
}

export default Component;
