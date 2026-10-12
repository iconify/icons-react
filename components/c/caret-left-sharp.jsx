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
		"content": `<style>.ggdm8wbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 6v14.542l-1.7-1.842l-5.6-6l-.686-.7l.686-.7l5.6-6l1.7-1.842z");
}
</style><path class="ggdm8wbfn"/>`,
		"fallback": "iconoven:caret-left-sharp",
	});
}

export default Component;
