import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w9coi__7o {
  fill: currentColor;
  d: path("M232 86.53V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h120v24a8 8 0 0 0 12 7l24-13.74L220 231a8 8 0 0 0 12-7v-62.53a51.88 51.88 0 0 0 0-74.94M128 144H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 98.21l-16-9.16a8 8 0 0 0-7.94 0l-16 9.16V172a51.88 51.88 0 0 0 40 0ZM196 160a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="w9coi__7o"/>`,
		"fallback": "ph:certificate-fill",
	});
}

export default Component;
