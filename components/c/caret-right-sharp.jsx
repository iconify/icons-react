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
		"content": `<style>.lyqmgt6mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6v14.542l1.7-1.842l5.6-6l.686-.7l-.686-.7l-5.6-6l-1.7-1.842z");
}
</style><path class="lyqmgt6mt"/>`,
		"fallback": "iconoven:caret-right-sharp",
	});
}

export default Component;
