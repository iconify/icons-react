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
		"content": `<style>.bqs376bze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5q.69 5.06 5.75 5.75q-5.06.69-5.75 5.75q-.69-5.06-5.75-5.75q5.06-.69 5.75-5.75m8.85-5.75h2.8q.6 0 .36.55l-1.77 4.15q-.24.55.36.55h1.55q.6 0 .28.51l-4.61 7.23q-.32.51-.37-.09l-.4-4.55q-.05-.6-.65-.6h-.55q-.6 0-.38-.56l2.56-6.63q.22-.56.82-.56");
}
</style><path class="bqs376bze"/>`,
		"fallback": "iconoven:inference",
	});
}

export default Component;
