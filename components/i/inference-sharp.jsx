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
		"content": `<style>.k-m49b5yu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5q.69 5.06 5.75 5.75q-5.06.69-5.75 5.75q-.69-5.06-5.75-5.75q5.06-.69 5.75-5.75Zm8.85-5.75h3.4l-.24.55l-1.77 4.15l-.24.55h2.75l-.32.51l-4.61 7.23l-.32.51l-.05-.6l-.4-4.55l-.05-.6h-1.75l.22-.56l2.56-6.63l.22-.56z");
}
</style><path class="k-m49b5yu"/>`,
		"fallback": "iconoven:inference-sharp",
	});
}

export default Component;
