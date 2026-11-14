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
		"content": `<style>.r07idpb-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5c-3-2-7.5-1-7.5 4c0 4.5 3.5 8 7.5 6.5c4 1.5 7.5-2 7.5-6.5c0-5-4.5-6-7.5-4Zm0 0l.5-3M8 2.5v3m8-3v3");
}
</style><path class="r07idpb-w"/>`,
		"fallback": "uix-sharp:gravity-apple",
	});
}

export default Component;
