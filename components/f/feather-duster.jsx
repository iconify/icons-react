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
		"content": `<style>.efrtnwq5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12V2.5m0 9.5c-1.5-5-3-8-4.75-9M12 12c1.5-5 3-8 4.75-9M12 12C8 6 4.5 5 3 8m9 4c4-6 7.5-7 9-4m-9.125 4h.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375h-.25a1.375 1.375 0 0 1-1.375-1.375A1.375 1.375 0 0 1 11.875 12M12 14.75v6.75");
}
</style><path class="efrtnwq5v"/>`,
		"fallback": "uix:feather-duster",
	});
}

export default Component;
