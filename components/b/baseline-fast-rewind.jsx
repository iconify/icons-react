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
		"content": `<style>.g5hi5oq4a {
  fill: currentColor;
  d: path("M11 18V6l-8.5 6zm.5-6l8.5 6V6z");
}
</style><path class="g5hi5oq4a"/>`,
		"fallback": "ic:baseline-fast-rewind",
	});
}

export default Component;
