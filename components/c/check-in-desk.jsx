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
		"content": `<style>.zj_w72pic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v8.5h-19Zm5 0a4.5 4.5 0 0 1 9 0m-14 3h19M12 4v2.5");
}
</style><path class="zj_w72pic"/>`,
		"fallback": "uix-sharp:check-in-desk",
	});
}

export default Component;
