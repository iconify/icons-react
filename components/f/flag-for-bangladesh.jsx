import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qja0zjb8u {
  fill: var(--svg-color--f42a41, #F42A41);
  cx: 16px;
  cy: 17.5px;
  r: 7px;
}

.uhgwdubil {
  fill: var(--svg-color--006a4d, #006A4D);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z");
}
</style><path class="uhgwdubil"/><circle class="qja0zjb8u"/>`,
		"fallback": "twemoji:flag-for-bangladesh",
	});
}

export default Component;
