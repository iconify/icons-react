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
		"content": `<style>.rn2txi0es {
  fill: currentColor;
  d: path("M238 192a6 6 0 0 1-6 6H88a6 6 0 0 1-6-6V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L94 62.49V186h138a6 6 0 0 1 6 6");
}
</style><path class="rn2txi0es"/>`,
		"fallback": "ph:arrow-elbow-left-up-light",
	});
}

export default Component;
