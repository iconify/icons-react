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
		"content": `<style>.bfaw_mbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.243 3.929l2.828 2.828L8 13.828l-3.536.708L5.172 11ZM15.5 16h6v4.5h-6Zm1.25 0v-1.25a1.75 1.75 0 0 1 3.5 0V16");
}
</style><path class="bfaw_mbqx"/>`,
		"fallback": "uix-sharp:edit-lock",
	});
}

export default Component;
