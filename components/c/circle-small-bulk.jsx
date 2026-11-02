import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pcwdquvly {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 12a5 5 0 1 1 10.001.001A5 5 0 0 1 7 12");
}
</style><path class="pcwdquvly"/>`,
		"fallback": "coolicons:circle-small-bulk",
	});
}

export default Component;
