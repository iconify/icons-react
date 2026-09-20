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
		"content": `<style>.eivs76jhz {
  fill: currentColor;
  d: path("M116.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L74 193.51V48a6 6 0 0 1 12 0v145.51l21.76-21.75a6 6 0 0 1 8.48 0m96-96l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L170 62.49V208a6 6 0 0 0 12 0V62.49l21.76 21.75a6 6 0 0 0 8.48-8.48");
}
</style><path class="eivs76jhz"/>`,
		"fallback": "ph:arrows-down-up-light",
	});
}

export default Component;
