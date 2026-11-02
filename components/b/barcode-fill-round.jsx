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
		"content": `<style>.f4l39xbyv {
  fill: currentColor;
  d: path("M5 5v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m4 0v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m4 0v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m4 0v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m4 0v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0");
}
</style><path class="f4l39xbyv"/>`,
		"fallback": "coolicons:barcode-fill-round",
	});
}

export default Component;
