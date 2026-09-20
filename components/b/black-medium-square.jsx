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
		"content": `<style>.c9mt5evfe {
  fill: var(--svg-color--212121, #212121);
  d: path("M23 23h82v82H23z");
}
</style><path class="c9mt5evfe"/>`,
		"fallback": "noto-v1:black-medium-square",
	});
}

export default Component;
