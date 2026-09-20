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
		"content": `<style>.en95f2bez {
  fill: var(--svg-color--fcd116, #fcd116);
  d: path("M0 14h36v8H0z");
}

.ixk09fb2q {
  fill: var(--svg-color--3a75c4, #3a75c4);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z");
}

.md8dn8b1e {
  fill: var(--svg-color--009e60, #009e60);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}
</style><path class="md8dn8b1e"/><path class="ixk09fb2q"/><path class="en95f2bez"/>`,
		"fallback": "twemoji:flag-for-gabon",
	});
}

export default Component;
