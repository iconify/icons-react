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
		"content": `<style>.c04cx3e2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.719 19.518c-.224-.242-.398-.589-.469-1.018L11.5 15c-.25-1-1.75-1-2 0l-.75 3.5C8.5 20 7 20.5 6.5 19c-.75-2-.75-5-1.5-7c-1-2.5-1.5-5.5 0-7.5s4-1 5.5-.5c1.5-.5 4-1.5 5.5.5s1 5 0 7.5a8 8 0 0 0-.224.701M15.5 15.5h6v6h-6Z");
}
</style><path class="c04cx3e2m"/>`,
		"fallback": "uix-sharp:bracket",
	});
}

export default Component;
