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
		"content": `<style>.tejejfbbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.409 11.72l2.121 2.121l-6.364 6.364l-2.121-2.121Zm8.485-6.364L11.47 12.78m5.303-8.131l2.828 2.828m-5.303-1.061l3.536 3.536m-5.657-1.414l3.535 3.535");
}
</style><path class="tejejfbbs"/>`,
		"fallback": "uix-sharp:eyebrow-brush",
	});
}

export default Component;
