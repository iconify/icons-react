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
		"content": `<style>.pq91jxbef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.914 5.522l1.212.471M13.7 11.985l-.23.194m-4.707-1.158l-1.149-.608m1.637 5.403l-.983.852M2.75 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6-4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm9 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-6.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-7.5 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM18 15v6m-3-3h6");
}
</style><path class="pq91jxbef"/>`,
		"fallback": "uix-sharp:constellation-plus",
	});
}

export default Component;
