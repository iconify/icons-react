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
		"content": `<style>.c1nyn7b5v {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M15 10h-5v10H.052c-.021.332-.052.66-.052 1v4h10v9h5v-9h10v-5H15z");
}

.gwmzvbclb {
  fill: var(--svg-color--194992, #194992);
  d: path("M63.948 20H25v5h39v-4c0-.34-.031-.668-.052-1M0 43c0 .34.031.668.052 1h63.896c.021-.332.052-.66.052-1v-4H0zm25-14h39v5H25zM10 10c-4.211 0-7.102 1.992-8.654 5C.591 16.462.17 18.169.052 20c-.021.332-.052.66-.052 1v13h25V10z");
}

.kb0pxobrs {
  fill: var(--svg-color--194992, #194992);
  d: path("M10 54h44c4.211 0 7.102-1.992 8.654-5H1.344c1.552 3.01 4.443 5 8.654 5M62.65 15c-1.553-3.01-4.443-5-8.654-5h-29v5z");
}

.smrj_2f4v {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M1.346 49h61.31c.755-1.462 1.176-3.169 1.294-5H.053c.118 1.831.539 3.538 1.294 5M25 20h38.948c-.118-1.831-.539-3.538-1.294-5H25zm0 9h39v-4.154l-39 .039zM0 34v5h64v-5H25z");
}
</style><path class="kb0pxobrs"/><path class="smrj_2f4v"/><path class="gwmzvbclb"/><path class="c1nyn7b5v"/>`,
		"fallback": "emojione-v1:flag-for-greece",
	});
}

export default Component;
