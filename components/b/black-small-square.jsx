import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tjktpnt8t {
  fill: var(--svg-color--212121, #212121);
  d: path("M50.04 50.04h27.91v27.92H50.04z");
}
</style><path class="tjktpnt8t"/>`,
		"fallback": "noto-v1:black-small-square",
	});
}

export default Component;
