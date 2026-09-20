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
		"content": `<style>.r9f-debkk {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M28.08 89.99h72v18h-72zm-.16-12.11h72L63.92 20z");
}
</style><path class="r9f-debkk"/>`,
		"fallback": "noto-v1:eject-button",
	});
}

export default Component;
