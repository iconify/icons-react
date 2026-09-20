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
		"content": `<style>.byiqteejc {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9z");
}

.drwyycbim {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}
</style><path class="byiqteejc"/><path class="drwyycbim"/>`,
		"fallback": "twemoji:flag-for-flag-monaco",
	});
}

export default Component;
