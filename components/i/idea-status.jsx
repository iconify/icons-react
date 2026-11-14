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
		"content": `<style>.fcsmwxbzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16v-1.5c-1.75-1-3-2.9-3-5a5.5 5.5 0 0 1 11 0c0 2.1-1.25 4-3 5V16Zm.5 3.5h4m2.75-1.5l2 2L21 15.75");
}
</style><path class="fcsmwxbzy"/>`,
		"fallback": "uix-sharp:idea-status",
	});
}

export default Component;
