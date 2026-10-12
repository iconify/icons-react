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
		"content": `<style>.vcb74elun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.75v7.5m3-6.5h2.5l2.1-1.1a2 2 0 0 1 .95-.25h2.45a1.5 1.5 0 0 1 0 3H11.5m-5.75 4.35h6.6a3 3 0 0 0 1.85-.65l5.6-4.4a1.5 1.5 0 0 0-1.85-2.35l-3.2 2.5m-4-13.1h5.5q.75 0 .5.71L16 5.54q-.25.71-1 .71h-3q-.75 0-1-.71l-.75-2.08q-.25-.71.5-.71m2.75 5c.85 1 1.25 1.65 1.25 2.2a1.25 1.25 0 0 1-2.5 0c0-.55.4-1.2 1.25-2.2");
}
</style><path class="vcb74elun"/>`,
		"fallback": "iconoven:cream-jar",
	});
}

export default Component;
