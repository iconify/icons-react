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
		"content": `<style>.s1xgspclg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v19M6.25 8.5L14 5v12l-7.75 3.5Zm4-1.75v12");
}
</style><path class="s1xgspclg"/>`,
		"fallback": "uix-sharp:gate-open",
	});
}

export default Component;
