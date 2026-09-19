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
		"content": `<style>.cz1q2ab_l {
  fill: var(--svg-color--354a54, #354a54);
  d: path("M63.998 57.1a6.9 6.9 0 0 1-6.899 6.903h-50.2A6.9 6.9 0 0 1 .003 57.1V6.9C.003 3.09 3.091 0 6.899 0h50.2a6.9 6.9 0 0 1 6.899 6.9z");
}
</style><path class="cz1q2ab_l"/>`,
		"fallback": "emojione-v1:black-large-square",
	});
}

export default Component;
