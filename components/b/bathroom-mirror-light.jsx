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
		"content": `<style>.ugvoi6txm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14.5a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0ZM5.25 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="ugvoi6txm"/>`,
		"fallback": "uix-sharp:bathroom-mirror-light",
	});
}

export default Component;
