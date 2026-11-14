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
		"content": `<style>.u71le4btj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h11v13.5h-11ZM9 8V2.5m.25 9h5.5m-5.5 3h5.5m-5.5 3h5.5");
}
</style><path class="u71le4btj"/>`,
		"fallback": "uix-sharp:com-radio",
	});
}

export default Component;
