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
		"content": `<style>.mqn9i7b7o {
  d: path("M14.5 20.5h-11V10h14v4.5M6.5 10V7a4 4 0 0 1 8 0v3m-4 3.75v2.75");
}

.pizvci63l {
  d: path("M18.25 15q.5 2.75 3.25 3.25q-2.75.5-3.25 3.25q-.5-2.75-3.25-3.25q2.75-.5 3.25-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mqn9i7b7o"/><path class="pizvci63l"/></g>`,
		"fallback": "uix-sharp:ai-lock",
	});
}

export default Component;
