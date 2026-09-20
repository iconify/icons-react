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
		"content": `<style>.m24221hhq {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m29.01 6.24l31.71 54.92H29.01L64 121.76l34.99-60.6H67.28L98.99 6.24z");
}
</style><path class="m24221hhq"/>`,
		"fallback": "noto-v1:fast-down-button",
	});
}

export default Component;
