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
		"content": `<style>.jl7nome4n {
  d: path("M5.75 10h1.5v1.5h-1.5Zm6.5 0h1.5v1.5h-1.5Zm3.25 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nd-6h7bbx {
  d: path("M12.7 18.5H2.5v-13H17v7.4M9.75 2.75V5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nd-6h7bbx"/><path class="jl7nome4n"/></g>`,
		"fallback": "uix-sharp:chatbot-intent",
	});
}

export default Component;
