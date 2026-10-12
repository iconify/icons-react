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
		"content": `<style>.grjqopruv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.5h11.75v6H9.5zm6 0v6m-8.75-7H9.5v8H5.75v-8zm-.25 0L9 3h9M5.75 11h-3v10.25");
}
</style><path class="grjqopruv"/>`,
		"fallback": "iconoven:grease-gun-sharp",
	});
}

export default Component;
