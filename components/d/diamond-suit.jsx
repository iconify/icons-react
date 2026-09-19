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
		"content": `<style>.euu415bms {
  fill: currentColor;
  d: path("M62 32L32 62L2.001 32l30-30z");
}
</style><path class="euu415bms"/>`,
		"fallback": "emojione-monotone:diamond-suit",
	});
}

export default Component;
