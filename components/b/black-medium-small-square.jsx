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
		"content": `<style>.x6bpzjfoq {
  fill: var(--svg-color--354a54, #354a54);
  d: path("M48.566 44.991a3.57 3.57 0 0 1-3.572 3.575H19.005c-1.972 0-3.57-1.6-3.57-3.575V19.005a3.57 3.57 0 0 1 3.57-3.572h25.989c1.975 0 3.572 1.6 3.572 3.572z");
}
</style><path class="x6bpzjfoq"/>`,
		"fallback": "emojione-v1:black-medium-small-square",
	});
}

export default Component;
