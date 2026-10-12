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
		"content": `<style>.tg0jumbuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h4.5m-4.5 4.25h4.5m-4.5 9.5h18.5m-9-16h9v10H15.5l-3.25 2.75v-2.75h-2v-10z");
}
</style><path class="tg0jumbuu"/>`,
		"fallback": "iconoven:comment-bubble-sharp",
	});
}

export default Component;
