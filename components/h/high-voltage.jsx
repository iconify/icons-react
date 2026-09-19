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
		"content": `<style>.c526wmb6z {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("m44.5 2l-9 2.5L29.4 2l-9.9 34.4h10.4L20.8 62l22.4-34.4H29.7z");
}
</style><path class="c526wmb6z"/>`,
		"fallback": "emojione:high-voltage",
	});
}

export default Component;
