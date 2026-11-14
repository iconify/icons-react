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
		"content": `<style>.bequtitlp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10ZM8 13.5v4a4 4 0 0 0 8 0v-4Z");
}
</style><path class="bequtitlp"/>`,
		"fallback": "uix-sharp:capsule-open",
	});
}

export default Component;
