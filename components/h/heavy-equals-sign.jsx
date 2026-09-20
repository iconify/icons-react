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
		"content": `<style>.jz4nbhbrr {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M34 12a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3m0 12a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3");
}
</style><path class="jz4nbhbrr"/>`,
		"fallback": "twemoji:heavy-equals-sign",
	});
}

export default Component;
