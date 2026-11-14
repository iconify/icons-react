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
		"content": `<style>.q6fbkzlqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5h4v14h-4Zm9.5 3h6.25v8h-6.25ZM3 2.5v19m9.5-19v19");
}
</style><path class="q6fbkzlqe"/>`,
		"fallback": "uix-sharp:distribute-left",
	});
}

export default Component;
